import cls from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = [
  "btn",
  "btn-ghost",
  "h-auto",
  "pl-0",
  "pr-0",
  "normal-case",
  "hover:bg-accent",
  "flex",
  "font-semibold",
  "duration-200",
  "min-h-[45px]",
  "min-w-[45px]",
  "items-center",
  "justify-center",
  "bg-transparent",
  "focus:outline-accent",
];

const tooltipStyles = ["tooltip", "tooltip-bottom", "tooltip-accent"].join(" ");

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> {
  tooltip?: string;
  active?: boolean;
  href?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ tooltip, active = false, children, className, ...rest }, ref) => {
    const styles = twMerge(
      cls(buttonStyles, { [tooltipStyles]: tooltip }, { "bg-accent": active }),
      className
    );
    return (
      <button data-tip={tooltip} className={styles} ref={ref} {...rest}>
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
