import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function OnboardingLayout({
    children,
}: {
    children: React.ReactNode;
}) {

  const session = await auth();
     return (
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <SessionProvider session={session}>
            <div>

              <main className="container mx-auto px-4 py-8">{children}</main>
            </div>
            </SessionProvider>
          </body>
        </html>
      );
}
