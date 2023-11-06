import React from "react";
import Header from "./components/Header";

type Props = {
  children: React.ReactNode;
};

const RestaurantLayout = (props: Props) => {
  return (
    <main>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {props.children}
      </div>
    </main>
  );
};

export default RestaurantLayout;
