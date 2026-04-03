import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meal";
import { Suspense } from "react";

export const metadata = {
  title: "All meals",
  description:
    "Browse the delicious meals that shared by our vibrant community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delecious meal created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          choose your favorite recipe and cook it yourself, it is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Loading meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
