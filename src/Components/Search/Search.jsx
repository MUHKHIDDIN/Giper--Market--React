import React from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { useDebounce } from "../../hooks/use-Debounce";
import { useSearch } from "../../Components/Search/Service/Query/use-Search";


export const Search = () => {
  const [inputValue, setValue] = React.useState("");
  const debouncedValue = useDebounce(inputValue);
  const { data } = useSearch(debouncedValue);

  return (
    <div className="relative flex w-full max-w-md mx-auto items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <BsFillSearchHeartFill className="text-lg text-gray-500" />
        </div>
        <input
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
          className="w-full border border-gray-300 bg-white p-2 pl-10 text-sm text-gray-800 shadow-sm outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-yellow-400"
          type="text"
        />
      </div>
      {inputValue.length >= 3 && (
        <div className="absolute left-0 top-full z-10 mt-2 w-full rounded-lg bg-white shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
          <div className="p-4">
            {data?.length ? (
              data.map((item) => < SearchItem key={item.id} {...item} />)
            ) : (
              <p className="text-center text-gray-700">No results found.</p>
            )} 
          </div>
        </div>
      )}
    </div>
  );
};
