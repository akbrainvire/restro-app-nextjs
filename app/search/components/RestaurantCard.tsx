import Link from "next/link";
import React from "react";

type Props = {
  data: {
    id: number;
    name: string;
    main_image: string;
    description: string;
    slug: string;
    price: string;
    cuisine: any;
  };
};

const RestaurantCard = (props: Props) => {
  return (
    <div className="border-b flex pb-5">
      <img src={props.data.main_image} alt="" className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{props.data.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">{props.data.price}</p>
            <p className="mr-4">{props.data.cuisine.name}</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${props.data.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
