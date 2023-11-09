import React from "react";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import supabase from "../config/supabaseClient";

type Props = {
  searchParams: any;
};

async function Search({ searchParams }: Props) {
  const searchQuery = searchParams?.country.toUpperCase();
  const searchQueryCuisine = searchParams?.cuisine?.toUpperCase();

  const searchParameters = {
    country: searchQuery,
    cuisine: searchQueryCuisine,
    price: searchParams?.price?.toUpperCase(),
  };
  // console.log(searchQuery);

  // let dataFetch: any = {};

  // const getData = async () => {
  //   if (searchParameters.country) {
  //     const { data, error } = await supabase
  //       .from("location")
  //       .select("*")
  //       .eq("name", `${searchParameters.country}`);
  //     console.log(data);
  //   }

  //   if (searchParameters.cuisine) {
  //     const cuisine = await supabase
  //       .from("cuisine")
  //       .select()
  //       .eq("name", `${searchParameters.cuisine}`);

  //     const cuisineID = cuisine.data;

  //     const { data, error } = await supabase
  //       .from("restaurants")
  //       .select()
  //       .eq("cuisine_id", `${searchParameters.cuisine}`);
  //     // .select("restaurants(*), cuisine(*)");
  //     // .filter("name", "eq", `${searchParameters.country}`)
  //     // .filter("cuisine.name", "eq", `${searchParameters.cuisine}`);
  //     console.log(data, "here");
  //     console.log(error, "error");

  //     dataFetch = data;
  //   }

  //   getData();

  //   if (searchParameters.price) {
  //     const { data, error } = await supabase
  //       .from("restaurants")
  //       .select()
  //       .filter("name", "eq", `${searchParameters.country}`)
  //       .filter("cuisine.name", "eq", `${searchParameters.cuisine}`)
  //       .filter("price", "eq", `${searchParameters.price}`);
  //     console.log(data, "here");

  //     dataFetch = data;
  //   }
  // };

  ///////////////
  let fetchData;
  const locationId: any = await supabase
    .from("location")
    .select("id")
    .eq("name", `${searchQuery}`);

  if (locationId.data.length > 0) {
    fetchData = await supabase
      .from("restaurants")
      .select(`* , cuisine(*)`)
      .eq("location_id", `${locationId.data[0].id}`);
  } else {
    fetchData = { data: [] };
  }
  // console.log(fetchData.data);

  const fetchLocationData = await supabase.from(`location`).select(`name`);
  const fetchCuisineData = await supabase.from(`cuisine`).select(`name`);
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          locationData={fetchLocationData}
          fetchCuisineData={fetchCuisineData}
          searchParameters={searchParameters}
        />
        <div className="w-5/6">
          {fetchData?.data?.length
            ? fetchData.data.map((item: any) => {
                return <RestaurantCard data={item} />;
              })
            : "Sorry There is NO Restaurant Available"}
        </div>
      </div>
    </>
  );
}

export default Search;
