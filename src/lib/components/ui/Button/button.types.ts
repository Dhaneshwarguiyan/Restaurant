import { buttonVariants } from "./buttonVarients";
import { type VariantProps } from "class-variance-authority";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = {
  content: string,
} & ButtonVariants;