"use client";
export default function Error({ error }) {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>Error when fetching data, try again later.</p>
    </main>
  );
}
