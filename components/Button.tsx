import Image from "next/image";
import { MouseEventHandler } from "react";
import clsx from "clsx";

type Props = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
};

const Button = ({
  title,
  leftIcon,
  rightIcon,
  handleClick,
  isSubmitting,
  type,
  bgColor,
  textColor,
}: Props) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting}
      className={clsx(
        "flexCenter gap-3 px-4 py-3 rounded-xl text-sm font-medium max-md:w-full",
        isSubmitting ? "bg-black/50" : bgColor || "bg-primary-purple",
        textColor || "text-white"
      )}
      onClick={handleClick}
    >
      {leftIcon && (
        <Image src={leftIcon} width={14} height={14} alt="left button icon" />
      )}
      {title}
      {rightIcon && (
        <Image src={rightIcon} width={14} height={14} alt="right button icon" />
      )}
    </button>
  );
};

export default Button;
