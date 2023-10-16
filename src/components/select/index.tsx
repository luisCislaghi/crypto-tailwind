"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { TbCheck, TbChevronDown, TbChevronUp } from "react-icons/tb";
import clsx from "clsx";
import React, { FC, Ref } from "react";
import { coins } from "@/app/coins";
import Option from "./option";
import { DefaultSelectExtension, OptionType } from "./types";

export type SelectProps = Pick<RadixSelect.SelectValueProps, "placeholder"> & {
  options?: OptionType[];
  triggerProps?: Pick<RadixSelect.SelectTriggerProps, "aria-label">;
};

export const Select: FC<SelectProps> & DefaultSelectExtension = ({
  triggerProps,
  placeholder,
  ...props
}) => (
  <>
    <RadixSelect.Root>
      <RadixSelect.Trigger
        className="inline-flex h-8 items-center justify-center rounded bg-white text-xs leading-none"
        {...triggerProps}
      >
        <RadixSelect.Value placeholder={placeholder} />
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="overflow-hidden rounded-md bg-white">
          <RadixSelect.ScrollUpButton className="SelectScrollButton">
            <TbChevronUp />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="p-1">
            {props.options?.map((option, i) => (
              <>
                {i > 0 && option.type === "group" && (
                  <RadixSelect.Separator className="m-1 h-px" />
                )}
                <Option {...option} />
              </>
            ))}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex h-6 cursor-default items-center justify-center bg-white">
            <TbChevronDown />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  </>
);

Select.Coins = (props) => {
  console.log(coins);
  const options = Object.values(coins).map(
    (coin) =>
      ({
        type: "item",
        label: coin.name,
        icon: coin.icon,
      }) as OptionType,
  );
  return <Select {...props} options={options} placeholder="Select a coin" />;
};

export default Select;
