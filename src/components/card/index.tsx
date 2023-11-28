import cn from "@/util/cn";
import { CSSProperties, FC, ReactNode } from "react";
import { IconType } from "react-icons";

type Props = {
  className?: string;
  title?: ReactNode;
  extra?: ReactNode;
  icon?: IconType;
  description?: ReactNode;
  children?: ReactNode;
  bordered?: boolean;
  size?: "small" | "default";
};

const Card: FC<Props> = ({
  size = "default",
  bordered = true,
  className,
  children,
  icon: Icon,
  title,
  extra,
  description,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(className, "rounded-3xl", {
        "border-2 border-gray-200": bordered,
        "p-6": size === "small",
        "p-8": size === "default",
      })}
    >
      {(title || description || extra) && (
        <header
          className={cn("flex flex-1 flex-wrap content-between items-center", {
            "mb-4 gap-8": size === "default",
            "mb-2 gap-6": size === "small",
          })}
        >
          <div
            className={cn("flex flex-1  items-center", {
              "gap-4": size === "default",
              "gap-2": size === "small",
            })}
          >
            <>
              {Icon && (
                <div className="rounded-full bg-black p-1">
                  <Icon color="white" />
                </div>
              )}
              <h4
                className={cn("font-bold", {
                  "text-lg": size === "small",
                  "text-2xl": size === "default",
                })}
              >
                {title}
              </h4>
              {description}
            </>
          </div>
          {extra}
        </header>
      )}
      {children}
    </div>
  );
};

export default Card;
