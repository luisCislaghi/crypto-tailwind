import * as RadixSelect from "@radix-ui/react-select";
import { TbCheck } from "react-icons/tb";
import cn from "@/util/cn";
import React, { FC, Ref } from "react";
import { IconType } from "react-icons";

export type SelectItemProps = RadixSelect.SelectItemProps & { icon?: IconType };

const SelectItem = React.forwardRef(
  (
    { children, className, icon: Icon, ...props }: SelectItemProps,
    forwardedRef: Ref<HTMLDivElement> | undefined,
  ) => {
    return (
      <RadixSelect.Item
        className={cn(
          "flex select-none items-center gap-2 rounded-sm p-2 pl-6 leading-none hover:cursor-pointer hover:bg-stone-100",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <>
          <RadixSelect.ItemIndicator className="absolute left-2 inline-flex w-6 justify-center ">
            <TbCheck />
          </RadixSelect.ItemIndicator>
          <RadixSelect.ItemText className="">
            <div className="flex items-center  gap-2">
              {Icon && (
                <div className=" rounded-full bg-black p-2  ">
                  <Icon color="white" />
                </div>
              )}
              <span className=" font-bold">{children}</span>
            </div>
          </RadixSelect.ItemText>
        </>
      </RadixSelect.Item>
    );
  },
);
export default SelectItem;
