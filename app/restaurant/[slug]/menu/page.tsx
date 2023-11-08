import React from "react";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import supabase from "../../../config/supabaseClient";

type Props = {
  params: { slug: string };
};

const RestaurantMenu = async (props: Props) => {
  const fetchData: any = await supabase
    .from("restaurants")
    .select(`items`)
    .eq("slug", `${props.params.slug}`);

  const data = fetchData.data[0].items;

  // console.log(fetchData.data[0].items);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={props.params.slug} />
        <Menu items={data} />
      </div>
    </>
  );
};

export default RestaurantMenu;
