import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";
import Footer from "@/components/ui/footer";
import CartProvider from "@/providers/cart";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSM STORE - Os melhores preços do Brasil",
  description: "Os melhores periféricos e os melhores preços em um só lugar",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  openGraph: {
    images: [
      {
        url: "https://i.imgur.com/gGzo9ag.png",
      },
    ],
  },
  keywords: [
    "periféricos",
    "mouses",
    "teclados",
    "fones",
    "e-commerce",
    "monitores",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <CartProvider>
              <Header />
              <div className="h-auto flex-1">{children}</div>
              <Toaster />
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
