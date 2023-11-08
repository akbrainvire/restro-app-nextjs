// import { Inter } from "next/font/google";
import supabase from "./config/supabaseClient";

import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
// const inter: any = Inter({ subsets: ["latin"] });

export interface IRESTAURANTCARDTYPE {
  name?: string;
  id?: number;
  main_image?: string;
  description?: string;
  images?: string[];
  price?: string;
  slug?: string;
  cuisine: ICUISINEDATA;
  location: ILOCATIONTYPE;
}
export interface ILOCATIONTYPE {
  name?: string;
  id?: number;
  restaurant?: string[];
}

export interface ICUISINEDATA {
  name?: string;
  id?: number;
  restaurant?: string[];
}

export default async function Home(): Promise<any> {
  const fetchData = await supabase
    .from("restaurants")
    .select(`*, cuisine( * ), location(*)`);
  // console.log(fetchData);
  // const cuisineData = await supabase.from("cuisine").select();
  // const location = await supabase.from("location").select();

  const restaurants = fetchData?.data;
  // const cuisine = cuisineData;
  // console.log(fetchData?.data);
  // console.log(fetchData);
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants?.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
        })}
      </div>
    </main>
  );
}

//Qy9p1L3rlSmA3Req
