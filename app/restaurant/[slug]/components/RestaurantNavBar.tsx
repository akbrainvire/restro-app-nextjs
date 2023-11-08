import Link from "next/link";
import React from "react";

type Props = {
  slug: string;
};

const RestaurantNavBar = (props: Props) => {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={`/restaurant/${props.slug}`} className="mr-7">
        Overview
      </Link>
      <Link href={`/restaurant/${props.slug}/menu`} className="mr-7">
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNavBar;
