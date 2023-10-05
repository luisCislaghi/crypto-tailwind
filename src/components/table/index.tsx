import { AnyObject } from "@/util/type";
import React, { FC, Key, ReactNode } from "react";

export type ColumnType<T> = {
  title?: ReactNode;
  dataIndex: string;
  render?: (value: string | number, row: T) => ReactNode;
};

export type TableProps<T> = {
  data: T[];
  columns: ColumnType<T>[];
  rowKey?: ((row: T) => Key) | string;
  showHeader?: boolean;
};

export const Table = <T extends AnyObject = AnyObject>(
  props: TableProps<T>,
) => {
  const { data, columns, showHeader = true, rowKey = "id" } = props;
  const defaultRender = (value: string | number, row: T) => value;
  return (
    <>
      <table className="w-full">
        {showHeader && (
          <thead>
            <tr>
              {columns.map((e) => {
                return <th>{e.title}</th>;
              })}
            </tr>
          </thead>
        )}
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                className="border-b border-gray-200 last:border-none"
                key={typeof rowKey === "string" ? item[rowKey] : rowKey(item)}
              >
                {columns.map((e) => {
                  return (
                    <td className="p-2 first:pl-0 last:pr-0">
                      {e.render
                        ? e.render(item[e.dataIndex], item)
                        : defaultRender(item[e.dataIndex], item)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
