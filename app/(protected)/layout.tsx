import { Footer } from "@/components/feature/layout/Footer";
import { Header } from "@/components/feature/layout/Header";
import { Sidebar } from "@/components/feature/layout/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <SidebarProvider>
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </SidebarProvider>
  );
}
