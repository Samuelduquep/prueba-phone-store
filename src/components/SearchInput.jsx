import React from "react";
import usePhone from "../hooks/usePhone";

const SearchInput = () => {
  const { setSearch, search } = usePhone();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mt-5 md:mt-0 flex gap-4 md:content-center">
      <input
        value={search}
        type="text"
        id="search"
        placeholder="Search"
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 w-full"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
