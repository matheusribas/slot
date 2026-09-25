import { Footer } from "@/components/feature/layout/footer";
import { Header } from "@/components/feature/layout/header";
import { Sidebar } from "@/components/feature/layout/sidebar";
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
