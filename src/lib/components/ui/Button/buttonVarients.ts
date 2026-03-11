import { cva } from "class-variance-authority";



export const buttonVariants = cva(
    "rounded-lg w-fit font-alex",
    {
        variants:{
            variant:{
                primary: "text-white bg-accent hover:bg-muted",
                secondary: "text-black bg-secondary hover:bg-secondary-muted",
            },
            size : {
                small: "px-4 py-2",
                mobile: "text-sm px-5 py-2.5",
                desktop: "px-6 py-4 font-medium",
            },
        },
        defaultVariants:{
            variant: "primary",
            size: "desktop"
        }
    }
);