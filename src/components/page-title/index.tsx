import React, { FC, ReactNode } from "react";

export type PageTitleProps = {
  title: string;
  extra: ReactNode;
};

export const PageTitle: FC<PageTitleProps> = ({ title, extra }) => {
  return (
    <div className="mb-8 flex justify-between gap-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div>{extra}</div>
    </div>
  );
};
