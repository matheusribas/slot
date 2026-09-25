import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";
import Image from "next/image";

interface ImageLogoProps {
  width?: number;
  height?: number;
}
export function ImageLogo({ width, height }: ImageLogoProps) {
  const imageProps = {
    width: width ?? 96,
    height: height ?? 31,
  };

  return (
    <>
      <Image
        {...imageProps}
        alt="Logotipo da Slot"
        className="block dark:hidden"
        src={logoDark}
      />
      <Image
        {...imageProps}
        alt="Logotipo da Slot"
        className="hidden dark:block"
        src={logoLight}
      />
    </>
  );
}
