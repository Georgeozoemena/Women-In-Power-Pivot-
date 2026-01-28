import Navbar from "../components/navigation/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}