import React from "react";

// make component wrapper

type Props = {
  children: React.ReactNode;
  background: string;
};

const BasicContainer = (props: Props) => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="placeitem">
        <img src={props.background} className="" alt="background" />
      </div>

      <div>{props.children}</div>
    </div>
  );
};

export default BasicContainer;
