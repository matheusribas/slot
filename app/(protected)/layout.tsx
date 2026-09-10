import { Footer } from "@/components/feature/layout/Footer";
import { Header } from "@/components/feature/layout/Header";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
