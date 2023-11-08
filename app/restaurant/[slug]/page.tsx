import React from "react";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";

import supabase from "../../config/supabaseClient";
import ReservationCard from "./components/ReservationCard";

interface IDATA {
  name: string;
  id: number;
  main_image: string;
  images: string[];
  description: string;
  open_time: string;
  close_time: string;
  slug: string;
  price: string;
  items: string[];
  location_id: number;
  cuisine_id: number;
}

const RestaurantDetails = async (slug: any) => {
  const fetchData: any = await supabase
    .from("restaurants")
    .select(`* , cuisine(*), location(*)`)
    .eq("slug", `${slug.params.slug}`);

  // console.log(fetchData.data);

  const data: IDATA = fetchData?.data[0];

  // console.log(fetchData.data.images);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={data.slug} />
        <Title title={data?.name} />
        <Rating />
        <Description description={data?.description} />
        <Images images={data.images} />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetails;
