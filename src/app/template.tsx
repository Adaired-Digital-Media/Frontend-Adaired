import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import PageTransition from "@/components/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      <Navbar />
      {children}
      <Footer />
    </PageTransition>
  );
}
