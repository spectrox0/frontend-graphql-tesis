import React from "react";
import CardCategories from "../Cards/CardCategory";
import HeaderSearch from "./HeaderSearch";
export default function Conversations({ options, categories }) {
  const Cards = ({ categories }) =>
    categories.map((category, key) => (
      <CardCategories key={key} name={category.replace("_", " ")} />
    ));
  return (
    <section
      className={
        options === 1 ? "categories active scroll" : "categories scroll"
      }
    >
      <HeaderSearch categories={categories} />
    </section>
  );
}
