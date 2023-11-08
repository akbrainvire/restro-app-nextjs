import React from "react";

type Props = {
  items: string[];
};

const MenuCard = (props: Props) => {
  const parseItem = props.items.map((item: any) => {
    return JSON.parse(item);
  });
  // console.log(parseItem);
  return (
    <>
      {parseItem.map((item: any) => {
        return (
          <div className=" border rounded p-3 w-[49%] mb-3">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="font-light mt-1 text-sm">{item.description}</p>
            <p className="mt-7">{item.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default MenuCard;
