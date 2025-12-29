import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SmoothScroll from "./components/SmoothScroll";
import LoadingScreen from "./components/LoadingScreen";
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
        <LoadingScreen />
        <SmoothScroll />
        <NavBar />
        {children}
        <div className="px-4 md:px-8 lg:px-[4.6rem]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
