import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "./context/store";
// import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michał Wolny - Professional Frontend Developer from Poland.",
  description:
    "I am a frontend developer with over four years of experience. So far, I have mainly worked with Vue.js, but I am also ready to work on projects using the React.js + Typescript stack. I am open to new experiences and I want to continue growing in my profession.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      {/* <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-23P2M5QCNJ" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-23P2M5QCNJ');
        `}
        </Script>
      </head> */}
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
