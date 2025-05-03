// src/app/layout.tsx  (Server Component—no "use client")
import "../styles/globals.css";
import MuiProvider from "@/components/MuiProvider";
import Navbar from "@/components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MuiProvider>
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </MuiProvider>
      </body>
    </html>
  );
}
