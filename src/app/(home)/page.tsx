import ContainerLayout from "@/components/ui/containerLayout";
import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import Link from "next/link";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
  return (
    <ContainerLayout>
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês"
        width={0}
        height={0}
        quality={100}
        className="mt-3 h-auto w-full"
        sizes="100vh"
      />
      <div className="mt-8">
        <Categories />
      </div>
      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>
      <div className="mt-10 flex flex-col gap-5 lg:flex-row">
        <Link href="/" className="flex flex-1">
          <PromoBanner
            src="/banner-home-02.png"
            alt="Até 55% de desconto em mouses"
            className="w-0 flex-1 "
          />
        </Link>

        <Link href="/" className="flex flex-1">
          <PromoBanner
            src="/banner-home-03.png"
            alt="Até 20% de desconto em fones"
            className="hidden w-0 flex-1 lg:block"
          />
        </Link>
      </div>
      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </ContainerLayout>
  );
}
