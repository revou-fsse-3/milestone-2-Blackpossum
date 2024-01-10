import React from 'react'

type ContainerProps = {
    children : React.ReactNode;
};

const contentWraper = (props:ContainerProps) => {
  return (
    <div>
        {/* make room for additional rendered */}
        <div>{props.children}</div>
    </div>
  )
};

export default contentWraper