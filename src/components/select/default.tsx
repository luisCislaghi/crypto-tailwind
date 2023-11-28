"use client";

import * as RS from "@radix-ui/react-select";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import React, { FC } from "react";
import Option from "./option";
import { OptionProps, OptionGroupProps, SelectProps } from "./types";
import PlaceHolder from "./placeholder";
import cn from "@/util/cn";

const Select: FC<SelectProps> = React.forwardRef<
  HTMLButtonElement,
  SelectProps
>(({ options, placeholder, classNames, ...props }, forwardedRef) => (
  <>
    <RS.Root {...props}>
      <RS.Trigger
        ref={forwardedRef}
        className={cn(
          "flex items-center  justify-between rounded-lg bg-white p-2 px-4  leading-none",
          classNames,
        )}
      >
        <RS.Value placeholder={<PlaceHolder>{placeholder}</PlaceHolder>} />
        <RS.Icon className="SelectIcon">
          <TbChevronDown />
        </RS.Icon>
      </RS.Trigger>
      <RS.Portal>
        <RS.Content className="justify-between overflow-hidden rounded-md bg-white ">
          <RS.ScrollUpButton className="SelectScrollButton">
            <TbChevronUp />
          </RS.ScrollUpButton>
          <RS.Viewport className="rounded-md border-2 p-2">
            {options?.map((option, i) => (
              <>
                {"options" in option ? (
                  <>
                    <RS.Separator className="m-1 h-px bg-stone-500 " />
                    <Option.Group {...(option as OptionGroupProps)} />
                  </>
                ) : (
                  <Option {...(option as OptionProps)}>{option.label}</Option>
                )}
              </>
            ))}
          </RS.Viewport>
          <RS.ScrollDownButton className="flex h-6 cursor-default items-center justify-center bg-white">
            <TbChevronDown />
          </RS.ScrollDownButton>
        </RS.Content>
      </RS.Portal>
    </RS.Root>
  </>
));

export default Select;
