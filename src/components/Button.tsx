import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
};

export function Button(props: ButtonProps) {
    return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">
        {props.children}
    </button>
}