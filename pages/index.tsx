import { Inter } from "@next/font/google";
import ContactUs from "../components/ui/ContactUs/ContactUs";
import Navbar from "../components/ui/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <ContactUs />
    </>
  );
}
