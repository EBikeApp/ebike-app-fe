import Header from "@/components/header";
import Footer from "@/components/Footer/Footer";
import ButtonForContactUs from "../ButtonForContact/Button";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <div className="mt-20 md:mt-0">
        {children}
      </div>
      <Footer />
      <div className="fixed bottom-9 right-2 z-20">
        <ButtonForContactUs />
      </div>
    </div>
  );
}
