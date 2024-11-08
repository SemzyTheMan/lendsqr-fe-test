import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./styles/globals.scss";

import { StoreProvider } from "@/StoreProvider";

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LeadSqr",
  description: "LeadSqr Frontend Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${work_sans.className}  antialiased`}>
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
