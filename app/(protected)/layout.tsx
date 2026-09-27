import { Footer } from "@/components/feature/layout/footer";
import { Header } from "@/components/feature/layout/header";
import { Sidebar } from "@/components/feature/layout/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <SidebarProvider>
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex flex-1 flex-col w-full sm:pl-8 sm:pr-10 sm:pt-6 sm:pb-10 sm:gap-10 pl-4 pr-4 pt-4 pb-8 gap-6">
          {children}
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
