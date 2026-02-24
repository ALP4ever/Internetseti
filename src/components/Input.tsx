import React, { useState } from 'react';

type SizeType = "small" | "middle" | "large";
type ColorType = "primary" | "secondary";

interface InputProps {
  size: SizeType;
  color: ColorType;
  title: string;
  children?: React.JSX.Element;
}

export const Input = (props: InputProps) => {
      // Declare a state variable to hold the input's value
  const [inputValue, setInputValue] = useState('');

  // Handler function to update the state as the user types
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  // Handler for form submission (optional, but common)
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevent the default browser form submission
    alert('A name was submitted: ' + inputValue);
  };
    const {title, size, color} = props;
    const defaultClass =
      "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2 cursor-pointer";
  
    const classes = {
      colors: {
        primary: {
          input: "bg-amber-700",
          text: "text-red",
        },
        secondary: {
          input: "bg-red-500",
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
    <form onSubmit={handleSubmit}
    className={
        defaultClass +
        " " +
        classes.sizes[size] +
        " " +
        classes.colors[color].input
      }
    >
      <label>
        {title} 
        {/* The input value is controlled by the React state */}
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Ввод</button>
    </form>
    );
  };