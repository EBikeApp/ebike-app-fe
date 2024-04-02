import Header from '@/pages/components/header';
import Footer from '@/pages/components/footer';
 
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}