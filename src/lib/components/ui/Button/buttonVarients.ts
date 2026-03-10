import { cva } from "class-variance-authority";



export const buttonVariants = cva(
    "rounded-lg w-fit",
    {
        variants:{
            variant:{
                primary: "text-white bg-green-800",
                secondary: "text-black bg-black",
            },
            size : {
                mobile: "text-sm px-5 py-2.5",
                desktop: "text-[20px] px-6 py-4",
            },
        },
        defaultVariants:{
            variant: "primary",
            size: "desktop"
        }
    }
);