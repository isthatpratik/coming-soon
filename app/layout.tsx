import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NeuralArc - The Cognitive Core Fueling Next-Gen Business Growth",
  description: "Neural Networks Reimagined as Pathways to Insight, Pushing past the boundaries of conventional analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fustat.className} antialiased bg-[#F8F7F3]`}
      >
        {children}
      </body>
    </html>
  );
}
