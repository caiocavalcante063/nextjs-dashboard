import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./ui/global.css";
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialised`}>{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
