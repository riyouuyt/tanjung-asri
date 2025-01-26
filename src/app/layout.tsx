import { Nunito, Quicksand, Fredoka, Comic_Neue } from "next/font/google";
import '../styles/globals.css'

// Konfigurasi font
const nunito = Nunito({ 
  subsets: ["latin"], 
  variable: "--font-nunito" 
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand"
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka"
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  variable: "--font-comic",
  weight: "400"
});

// Gabungkan semua variable font
const fontVariables = `
  ${nunito.variable} 
  ${quicksand.variable} 
  ${fredoka.variable} 
  ${comicNeue.variable}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={fontVariables}>
      <body>
        {children}
      </body>
    </html>
  );
}