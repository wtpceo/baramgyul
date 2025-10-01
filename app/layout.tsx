import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "바람결 브리즈밴드",
  description: "바람결 브리즈밴드 공식 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
