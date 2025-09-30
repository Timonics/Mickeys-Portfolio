import React from "react";

type Props = {
  size: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  translate?: number;
  translateX?: number;
  translateY?: number;
};

const Circle: React.FC<Props> = (props: Props) => {
  return (
    <div
      className="gradient-bg "
      style={{
        position: "absolute",
        width: `${props.size}px`,
        height: `${props.size}px`,
        top: `${props.top}px`,
        bottom: `${props.bottom}px`,
        left: `${props.left}px`,
        right: `${props.right}px`,
        borderRadius: "50%",
        zIndex: -1,
        opacity: 0.05,
      }}
    />
  );
};

export default Circle;
