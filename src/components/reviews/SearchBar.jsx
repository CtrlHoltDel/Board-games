import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBack2Line } from "react-icons/ri";

const SearchBar = ({ search }) => {
  const [currSearch, setCurrSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const del = (e) => {
    e.preventDefault();
    if (currSearch) {
      search("");
      setCurrSearch("");
    }
  };

  return (
    <div className="reviews-main__search">
      <form onSubmit={onSubmit}>
        <input
          onChange={({ target: { value } }) => {
            search(value);
            setCurrSearch(value);
          }}
          value={currSearch}
        />
        <button onClick={del} className="form-search-delete">
          <RiDeleteBack2Line />
        </button>
        <button className="form-search-submit">
          <FiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
