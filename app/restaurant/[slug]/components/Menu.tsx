import React from "react";
import MenuCard from "./MenuCard";

type Props = {
  items: string[];
};

const Menu = (props: Props) => {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          <MenuCard items={props.items} />
        </div>
      </div>
    </main>
  );
};

export default Menu;
