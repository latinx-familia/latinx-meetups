import { Inter } from "next/font/google";
import '@picocss/pico';
import './globals.css';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://latinxmeetups.com'),
  title: "Latinx Meetups",
  description: "Let's come together to celebrate 🎂🥳",
  charset: "UTF-8",
  openGraph: {
    url: "https://latinxmeetups.com",
    type: "website",
    title: "Latinx Meetups",
    description: "Let's come together to celebrate 🎂🥳",
    images: "/img/MexicoMay28.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <GoogleTagManager gtmId="GTM-PV2RL6N2" />
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
