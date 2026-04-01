import sq3 from "better-sqlite3";
const db = sq3("meals.db");

export async function getMeals() {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  const stmt = db.prepare("SELECT * FROM meals");
  return stmt.all();
}

export function getMealBySlug(slug) {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  return stmt.get(slug);
}
