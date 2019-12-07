import React, { useState } from "react";
import Select from "react-select";
import InputSearch from "./inputSearch";
export default function Conversations({ options, categories }) {
  const [categoriesSelected, setCatetories] = React.useState([]);
  const handlingChange = e => {
    if (e === null) setCatetories([]);
    else setCatetories(e.value);
  };
  const [search, setSearch] = useState();
  const handlingSearch = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <section>
      <Select
        className="selectSearch "
        classNamePrefix="Select"
        value={categoriesSelected}
        isMulti
        onChange={handlingChange}
        options={categories}
      />
      <InputSearch
        value={search}
        onChange={handlingSearch}
        placeholder="Search"
      />
    </section>
  );
}
