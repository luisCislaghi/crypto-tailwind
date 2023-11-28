import { AnyObject } from "@/util/type";
import cn from "@/util/cn";
import React, { FC, Key, ReactNode } from "react";

export type ColumnType<T> = {
  title?: ReactNode;
  dataIndex: string;
  align?: "right" | "left" | "center";
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

  const alignClasses = (align: string) =>
    cn({
      "text-right": align === "right",
      "text-center": align === "center",
    });

  return (
    <>
      <table className="w-full">
        {showHeader && (
          <thead>
            <tr key="tr1">
              {columns.map(({ title, align = "left" }, i) => {
                return <th className={alignClasses(align)}>{title}</th>;
              })}
            </tr>
          </thead>
        )}
        <tbody>
          {data.map((item, index) => {
            const key =
              typeof rowKey === "string" ? item[rowKey] : rowKey(item);

            return (
              <tr
                className="border-b border-gray-200 last:border-none"
                key={key}
              >
                {columns.map(({ align = "left", ...e }) => {
                  return (
                    <td
                      className={cn(
                        "p-2 first:pl-0 last:pr-0",
                        alignClasses(align),
                      )}
                    >
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
