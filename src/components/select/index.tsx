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

const Select: FC<SelectProps> = ({ triggerProps, placeholder, ...props }) => (
  <>
    <RadixSelect.Root>
      <RadixSelect.Trigger
        className="flex h-12 w-full  items-center justify-between rounded bg-white px-4  leading-none"
        {...triggerProps}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className="SelectIcon">
          <TbChevronDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="justify-between overflow-hidden rounded-md bg-white ">
          <RadixSelect.ScrollUpButton className="SelectScrollButton">
            <TbChevronUp />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="rounded-md border-2 p-2">
            {props.options?.map((option, i) => (
              <>
                {i > 0 && option.type === "group" && (
                  <RadixSelect.Separator className="m-1 h-px bg-stone-500 " />
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

const Coins: FC<SelectProps> = (props) => {
  const options: OptionType[] = Object.values(coins).map((coin) => ({
    type: "item",
    value: coin.name,
    label: coin.name,
    icon: coin.icon,
  }));
  return <Select {...props} options={options} placeholder="Select a coin" />;
};

export { Select, Coins };
