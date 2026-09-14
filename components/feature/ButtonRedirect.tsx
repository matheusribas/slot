"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "@/components/ui/button";
import { MouseEvent } from "react";
import { BaseUIEvent } from "@base-ui/react";

type ButtonRedirectProps = ButtonProps & {
  to: string;
};
export function ButtonRedirect({
  to,
  onClick,
  children,
  ...rest
}: ButtonRedirectProps) {
  const router = useRouter();

  function handleRedirect(
    event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>,
  ) {
    router.push(to);

    if (onClick) {
      onClick(event);
    }
  }
  return (
    <Button {...rest} onClick={handleRedirect}>
      {children}
    </Button>
  );
}
