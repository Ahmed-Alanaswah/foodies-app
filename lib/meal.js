import fs from "node:fs";
import sq3 from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
const db = sq3("meals.db");

export async function getMeals() {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  const stmt = db.prepare("SELECT * FROM meals");
  // throw new Error("Failed to fetch meals");
  return stmt.all();
}

export function getMealBySlug(slug) {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  return stmt.get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}-${Date.now()}.${extension}`;
  const bufferedImage = await meal.image.arrayBuffer();
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed to save the image");
    }
  });

  meal.image = `/images/${fileName}`;

  const stmt = db.prepare(
    `INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (
        @title,
        @summary,
        @instructions,
        @image,
        @creator,
        @creator_email,
        @slug
      )`,
  );
  stmt.run(meal);
}
