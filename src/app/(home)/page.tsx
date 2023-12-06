"use client";

import ContainerLayout from "@/components/ui/containerLayout";
import Image from "next/image";

export default function Home() {
  return (
    <ContainerLayout>
      <Image
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês"
        width={0}
        height={0}
        quality={100}
        className="mt-3 h-auto w-full"
        sizes="100vh"
      />
    </ContainerLayout>
  );
}
