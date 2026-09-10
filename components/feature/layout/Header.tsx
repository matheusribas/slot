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
import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import Image from "next/image";

export function Header() {
  // TODO: Fazer hook com os dados do usuário logado
  const user = { name: "Matheus Felipe" };
  const firstName = user.name.split(" ")[0];

  return (
    <header className="flex justify-between items-center w-full px-10 py-6 gap-10">
      <span />
      <Image
        alt="logotipo da slot"
        src="/logo-light.png"
        width={100}
        height={50}
      />

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
          <DropdownMenuItem variant="destructive">
            <LogOutIcon />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
