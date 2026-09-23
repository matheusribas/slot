import logoLight from "@/assets/logo-light.png";
import Image from "next/image";
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

export function Sidebar() {
  return (
    <SidebarUI collapsible="icon">
      <SidebarHeader className="mb-4">
        <Link href="/" about="voltar para home (Calendário)">
          <Image
            alt="logotipo da slot"
            src={logoLight}
            width={96}
            height={31}
          />
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
