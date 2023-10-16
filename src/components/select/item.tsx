"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { TbCheck, TbChevronDown, TbChevronUp } from "react-icons/tb";
import clsx from "clsx";
import React, { FC, Ref } from "react";
import { IconType } from "react-icons";

type SelectItemProps = RadixSelect.SelectItemProps & { icon?: IconType };

const SelectItem = React.forwardRef(
  (
    { children, className, icon: Icon, ...props }: SelectItemProps,
    forwardedRef: Ref<HTMLDivElement> | undefined,
  ) => {
    return (
      <RadixSelect.Item
        className={clsx(
          "relative flex h-6 select-none items-center rounded-sm text-xs leading-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {Icon && (
          <div className="flex rounded-full p-2">
            <Icon />
          </div>
        )}
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
          <TbCheck />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    );
  },
);
export default SelectItem;
