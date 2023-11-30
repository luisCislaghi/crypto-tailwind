import cn from "@/util/cn";
import React from "react";

export type TagProps = {
  children?: React.ReactNode;
  className?: string;
};

const Tag: React.FC<TagProps> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={cn("rounded-full px-2 py-1  leading-none", className)}
    />
  );
};

export default Tag;
