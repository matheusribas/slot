"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  // TODO: Fazer hook com os dados do usuário logado
  const user = { name: "Matheus Felipe" };
  const firstName = user.name.split(" ")[0];

  return (
    <header className="flex justify-between items-center w-full pl-8 pr-10 min-h-[4rem] gap-10">
      <SidebarTrigger />
      <span />
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" className="flex items-center gap-2">
              <p>Olá, {firstName}</p>
              <UserIcon />
            </Button>
          }
        />
        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuItem>
              <UserIcon />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon />
              Configurações
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            variant="destructive"
            render={<Link href="/login" />}
          >
            <LogOutIcon />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
