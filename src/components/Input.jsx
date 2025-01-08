import React from "react";
import clsx from "clsx";

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(
        "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-primary focus:outline-none focus:ring-1",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
