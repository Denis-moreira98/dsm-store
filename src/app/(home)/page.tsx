import ContainerLayout from "@/components/ui/containerLayout";
import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import Link from "next/link";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
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
      <div className="mt-8">
        <Categories />
      </div>
      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>
      <div className="mt-10 flex flex-col gap-5 lg:flex-row">
        <Link href="/" className="flex flex-1">
          <Image
            src="/banner-home-02.png"
            alt="Até 55% de desconto esse mês"
            width={0}
            height={0}
            quality={100}
            className="mt-2 h-auto w-full flex-1"
            sizes="100vh"
          />
        </Link>

        <Link href="/" className="flex flex-1">
          <Image
            src="/banner-home-03.png"
            alt="Até 55% de desconto esse mês"
            width={0}
            height={0}
            quality={100}
            className="mt-2 hidden h-auto w-0 flex-1 lg:block"
            sizes="100vh"
          />
        </Link>
      </div>
    </ContainerLayout>
  );
}
