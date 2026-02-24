import React from "react";

type SizeType = "small" | "middle" | "large";
type ColorType = "primary" | "secondary";

interface TextProps {
  size: SizeType;
  color: ColorType;
  title?: string;
  children?: React.JSX.Element;
}

export const Text = (props: TextProps) => {
  const { size, color, title} = props;
  const defaultClass =
    "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2";

  const classes = {
    colors: {
      primary: {
        bg: "bg-amber-700",
        text: "text-red",
      },
      secondary: {
        bg: "bg-red-500",
        text: "text-white",
      },
    },
    sizes: {
      small: "rounded-[100px] font-sm",
      middle: "rounded-[14px] font-base",
      large: "rounded-[16px] font-base min-h-[56px]",
    },
  };
  return (
    <div
      className={
        defaultClass +
        " " +
        classes.sizes[size] +
        " " +
        classes.colors[color].bg
      }
    >
      <p className={classes.colors[color].text}>{title}</p>
    </div>
  );
};

export default Text