import Link from "next/link";
import React, { ReactElement } from "react";
import supabase from "../../config/supabaseClient";

const SearchSideBar = ({
  locationData,
  fetchCuisineData,
  searchParameters,
}: any) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locationData.data?.map((placeObj: any) => {
          // return console.log(placeObj.name);
          return (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParameters, country: placeObj.name },
              }}
              key={placeObj.id}
              className="font-light text-reg"
            >
              {placeObj.name}
            </Link>
          );
        })}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {fetchCuisineData.data?.map((style: any) => {
          return (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParameters, cuisine: style.name },
              }}
              key={style.id}
              className="font-light text-reg"
            >
              {style.name}
            </Link>
          );
        })}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            CHEAP
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">
            REGULAR
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
            EXPENSIVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
