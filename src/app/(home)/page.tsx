import ContainerLayout from "@/components/ui/containerLayout";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import Link from "next/link";
import SectionTitle from "../../components/ui/section-title";
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
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
  return (
    <>
      <div className="mx-auto max-w-[1920px]">
        <Link href="/deals">
          <PromoBanner
            src="/deals-banner.png"
            className="hidden h-auto w-full lg:block"
            alt="Até 55% de desconto esse mês!"
          />
        </Link>
      </div>
      <ContainerLayout>
        <div className="mt-[5.2rem]">
          <Link href="/deals">
            <PromoBanner
              src="/banner-home-01.png"
              alt="Até 55% de desconto esse mês!"
              className="px-5 lg:hidden"
            />
          </Link>
        </div>

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
        <div className="mt-8">
          <Link href="/">
            <PromoBanner
              src="/banner-home-03.png"
              alt="Até 55% de desconto em mouses!"
              className="w-full lg:hidden"
            />
          </Link>

          <Link href="/">
            <PromoBanner
              src="/free-shipping-banner.png"
              alt="Frete grátis para todo Brasil"
              className="hidden w-full lg:block"
            />
          </Link>
        </div>
        <div className="mt-8">
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </ContainerLayout>
    </>
  );
}
