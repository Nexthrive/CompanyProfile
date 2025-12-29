import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-washed ${plusJakartaSans.variable}`}>
        <NavBar />
        {children}
        <div className="mt-36">
          <Footer />
        </div>
      </body>
    </html>
  );
}
