import React from "react";

const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  title = "",
}) => {
    const isFavorite = (curr)=> favorites.inCludes(curr);
  return <div>
    <label
    htmlFor={title}
    className="block text-sm font-medium text-gray-700"
    >
        {title}
    </label>

    <div>
        <select
        value={currency}
        onChange={(e)=>setCurrency(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
            {/* {favorites.map((currency)=>{
                return(
                    <option>
                        {currency}
                    </option>
                )
            })} */}
        </select>
    </div>
  </div>;
};

export default CurrencyDropdown;
