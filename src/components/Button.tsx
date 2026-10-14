import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "danger";

type ButtonProps = {
    variant: Variant;
} & ComponentProps<"button">;

export function Button({ variant: variant, className, ...props }: ButtonProps) {

    return <button {...props} className={twMerge(getVariantStyles(variant), 
        "transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
        className)} />;
}

function getVariantStyles(variant: Variant) {
    switch (variant) {
        case "primary":
            return "bg-violet-500 hover:bg-violet-700";
        case "secondary":
            return "bg-gray-500 hover:bg-gray-700";
        case "danger":
            return "hover:bg-red-800 text-red-800 hover:text-red-200";
        default:
            return "";
    }
}