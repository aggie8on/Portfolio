import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toothless Studio — Logos, Identity & Systems",
  description:
    "Toothless is an independent creative studio building distinctive logos, visual identities and flexible brand systems.",
  applicationName: "Toothless Studio",
  icons: {
    icon: "/brand/icons/toothless-10.svg",
  },
  openGraph: {
    title: "Toothless Studio — Logos, Identity & Systems",
    description:
      "Distinctive logos, thoughtful visual identities and flexible systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
