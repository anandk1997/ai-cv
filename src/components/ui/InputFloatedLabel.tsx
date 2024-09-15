"use client";

import { cn } from "@/lib/utils";
import { FocusEvent, useState } from "react";

type FloatedLabelInput = {
  label: string;
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
};

export const InputFloatedLabel: React.FC<FloatedLabelInput> = ({
  label,
  type,
  placeholder,
  name,
  id,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  return (
    <div className={cn("relative w-full", className)}>
      <input
        type={type ?? "text"}
        id={id}
        name={id}
        className="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <label
        htmlFor={id}
        className={`absolute text-sm text-gray-500 duration-300 transform px-2 bg-white ${
          isFocused || hasValue
            ? "scale-75 -translate-y-4 top-2 text-blue-600"
            : "scale-100 -translate-y-1/2 top-1/2 "
        } start-1 rtl:left-auto`}
      >
        {label}
      </label>
    </div>
  );
};
