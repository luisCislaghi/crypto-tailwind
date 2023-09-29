import {
  TbCurrencyDogecoin,
  TbCurrencyLitecoin,
  TbCurrencySolana,
  TbCurrencyBitcoin,
  TbCurrencyMonero,
  TbCurrencyEthereum,
} from "react-icons/tb";

export const coins = {
  eth: {
    code: "eth",
    name: "Ethereum",
    icon: TbCurrencyEthereum,
  },
  doge: {
    code: "doge",
    name: "Dogecoin",
    icon: TbCurrencyDogecoin,
  },
  btc: {
    code: "btc",
    name: "Bitcoin",
    icon: TbCurrencyBitcoin,
  },
  xmr: {
    code: "xmr",
    name: "Monero",
    icon: TbCurrencyMonero,
  },
  sol: {
    code: "sol",
    name: "Solana",
    icon: TbCurrencySolana,
  },
  ltc: {
    code: "ltc",
    name: "Litecoin",
    icon: TbCurrencyLitecoin,
  },
} as const;
