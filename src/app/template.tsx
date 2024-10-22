import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
