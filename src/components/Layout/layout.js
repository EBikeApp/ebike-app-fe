import Header from "@/components/header";
import Footer from "@/components/Footer/Footer";
import ButtonForContactUs from "../ButtonForContact/Button";

export default function Layout({ children }) {
  return (
    <div className="">
      <Header/>
      {children}
      <Footer />
      <div className="fixed bottom-9 left-2 z-20">
        <ButtonForContactUs />
      </div>
    </div>
  );
}
