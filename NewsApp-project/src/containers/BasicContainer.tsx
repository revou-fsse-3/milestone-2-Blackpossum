import React from "react";

// make component wrapper

type Props = {
  children: React.ReactNode;
  background: string;
};

const BasicContainer = (props: Props) => {
  return (
    <div className="flex flex-col-reverse ">
      <div className="placeitem">
        <h1 className="flex align-center border-8">Welcome to News Portal</h1>
        <img src={props.background} className="" alt="background" />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default BasicContainer;
