import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

export const metadata = {
  title: "Spireon Tech",
  icons: {
    icon: [
      {
        url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
        rel: "stylesheet",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-16" />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
