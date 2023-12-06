import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSM STORE",
  description: "E-Commerce",
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
            <Header />
            <div className="flex-1 md:pt-[6.25rem] lg:pt-[6.25rem]">
              {children}
            </div>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
