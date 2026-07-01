import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./css/globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "My professional portfolio using TypeScript, Next.js, React, and Tailwind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.min.css"
          integrity="sha512-jEuZ7UJIkLuNJYX1ONC+vhYwf0uYbqbd3IoHO8bHRzl8mpB5aj1wLtjxzm5F7fzuqpNQvP1FZXYtgv6kWhVKvQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer" />
      </head>
      <body>{children}</body>
    </html>
  );
}
