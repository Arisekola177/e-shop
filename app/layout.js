
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Navbar from "./components/nav/Navbar";
import Navbar2 from "./components/nav/Navbar2";
import "./globals.css";



export const metadata = {
  title: "E-shop",
  description: "E-commerce website",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
        <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* <Navbar2 /> */}
        <div className="flex-grow">
        {children}
        </div>
        <Footer />
        </div>
        </Layout>
      </body> 
    </html>
  );
}
