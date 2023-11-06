import React from "react";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";

type Props = {};

const RestaurantMenu = (props: Props) => {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Menu />
      </div>
    </>
  );
};

export default RestaurantMenu;
