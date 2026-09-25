import {
  Sidebar as SidebarUI,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  CalendarDaysIcon,
  HotelIcon,
  UserRoundCheckIcon,
  UsersIcon,
  WrenchIcon,
} from "lucide-react";
import Link from "next/link";
import { ImageLogo } from "@/components/feature/image-logo";

export function Sidebar() {
  return (
    <SidebarUI collapsible="icon">
      <SidebarHeader className="mb-4">
        <Link href="/" about="voltar para home (Calendário)">
          <ImageLogo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuButton render={<Link href="/" />} tooltip="Calendário">
              <CalendarDaysIcon /> Calendário
            </SidebarMenuButton>
            <SidebarMenuButton
              render={<Link href="/consumers" />}
              tooltip="Clientes"
            >
              <UserRoundCheckIcon /> Clientes
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Configurações</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuButton
              render={<Link href="/members" />}
              tooltip="Membros"
            >
              <UsersIcon /> Membros
            </SidebarMenuButton>
            <SidebarMenuButton
              render={<Link href="/services" />}
              tooltip="Serviços"
            >
              <WrenchIcon /> Serviços
            </SidebarMenuButton>
            <SidebarMenuButton
              render={<Link href="/accounts" />}
              tooltip="Contas"
            >
              <HotelIcon /> Contas
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </SidebarUI>
  );
}
