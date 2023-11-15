import { IconType } from "react-icons";
import {
  TbCurrencyDogecoin,
  TbCurrencyLitecoin,
  TbCurrencySolana,
  TbCurrencyBitcoin,
  TbCurrencyMonero,
  TbCurrencyEthereum,
  TbCurrencyDollar,
} from "react-icons/tb";

export type CoinObject = {
  [key: string]: CoinInfo;
};

export type CoinInfo = {
  name: string;
  icon: IconType;
};

export const coins: CoinObject = {
  usd: {
    name: "Dollar",
    icon: TbCurrencyDollar,
  },
  eth: {
    name: "Ethereum",
    icon: TbCurrencyEthereum,
  },
  doge: {
    name: "Dogecoin",
    icon: TbCurrencyDogecoin,
  },
  btc: {
    name: "Bitcoin",
    icon: TbCurrencyBitcoin,
  },
  xmr: {
    name: "Monero",
    icon: TbCurrencyMonero,
  },
  sol: {
    name: "Solana",
    icon: TbCurrencySolana,
  },
  ltc: {
    name: "Litecoin",
    icon: TbCurrencyLitecoin,
  },
} as const;
