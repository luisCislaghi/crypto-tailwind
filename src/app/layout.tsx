import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  header: ReactNode;
  sidemenu: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, header, sidemenu }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex">
          {sidemenu}
          <div className="grow">
            {header}
            <div className="flex min-h-screen pr-10">{children}</div>
          </div>
        </section>
      </body>
    </html>
  );
}
