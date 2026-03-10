import { buttonVariants } from "./buttonVarients";
import { type ButtonProps } from "./button.types";


const Button = ({content, variant, size}: ButtonProps) => {
    return (
      <div className={buttonVariants({variant,size})}>
          {content}
      </div>
    )
}

export default Button;