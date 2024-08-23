"use client";

import React from "react";
import { Column as AntColumn } from "@ant-design/plots";
import type { ColumnConfig } from "@ant-design/plots";

export type ColumnProps = {
  colunmConfig: ColumnConfig;
};

const Column: React.FC<ColumnProps> = (props) => {
  const config: ColumnConfig = {
    ...props.colunmConfig,
    style: { fill: "#ebebfc" },
    state: {
      active: { fill: "#d2d1ff" },
    },
    interactions: [{ type: "element-active" }],
    legend: false,
  };
  return <AntColumn {...config} />;
};

export default Column;
