import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from './Providers/providers'


const raleway = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UMSA Workflow Seguimiento",
  description: "Control fujo de trabajo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
