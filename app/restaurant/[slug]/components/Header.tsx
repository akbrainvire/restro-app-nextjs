import React from "react";

type Props = {
  name: string;
};

const Header = (props: Props) => {
  const renderTitle = () => {
    const nameArray = props.name.split("-");
    // nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;
    let name = nameArray.join(" ").toUpperCase();

    return name;
  };

  const name = renderTitle();
  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white captitalize text-shadow text-center">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Header;
