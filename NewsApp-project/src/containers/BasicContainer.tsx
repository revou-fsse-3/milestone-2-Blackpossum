import React from "react";

// make component wrapper

type Props = {
  children: React.ReactNode;
  background: string;
};

const BasicContainer = (props: Props) => {
  return (
    <div className="flex flex-row justify-center items-center mt-40">
      <div className="placeitem">
        <img src={props.background} className="w-[500px] h-[600px]" alt="background" />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default BasicContainer;
