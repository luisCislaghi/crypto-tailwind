import { IconType } from "react-icons";

export type InputProps = { icon?: IconType } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type CurrencyInputProps = InputProps & {
  coin: string;
};
