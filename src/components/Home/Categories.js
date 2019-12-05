import React from "react";
import CardCategories from "../Cards/CardCategory";
export default function Conversations({ options, categories }) {
  const Cards = ({ categories }) =>
    categories.map((category, key) => (
      <CardCategories key={key} name={category.name.replace("_", " ")} />
    ));
  return (
    <section
      className={
        options === 1 ? "categories active scroll" : "categories scroll"
      }
    >
      {categories && <Cards categories={categories} />}
    </section>
  );
}
