import cn from "@/util/cn";
import Link from "next/link";

import React, { ReactNode } from "react";

export type NavMenuItem = {
  label: ReactNode;
  href: string;
  active?: boolean;
};

export type NavMenuProps = {
  items?: NavMenuItem[];
};

export const NavMenu: React.FC<NavMenuProps> = ({ items, ...props }) => {
  return (
    <ul className="flex flex-nowrap gap-4">
      {items?.map(({ active = false, ...item }, i) => (
        <li
          key={i}
          className={cn("font-semibold", {
            "underline decoration-2 underline-offset-4": active,
          })}
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
