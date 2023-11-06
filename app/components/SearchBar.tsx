"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const SearchBar = (props: Props) => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e: any) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={() => {
          if (location === "banana") {
            return;
          }
          router.push("/search");
        }}
      >
        Lets go
      </button>
    </div>
  );
};

export default SearchBar;
