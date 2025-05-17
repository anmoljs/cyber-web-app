import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata = {
  title: "Cyber App by Anmol",
  description: "A place to buy your gadgets and cyber stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
