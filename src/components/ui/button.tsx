import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:scale-105 hover:shadow-[0_0_30px_hsl(190_95%_55%)] transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:scale-105 hover:shadow-[0_0_30px_hsl(0_84%_60%)] transition-all duration-300",
        outline: "border border-primary bg-background text-primary hover:scale-105 hover:shadow-[0_0_30px_hsl(190_95%_55%)] transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:scale-105 hover:shadow-[0_0_30px_hsl(55_70%_45%)] transition-all duration-300",
        ghost: "hover:scale-105 hover:text-primary hover:shadow-[0_0_20px_hsl(190_95%_55%)] transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
