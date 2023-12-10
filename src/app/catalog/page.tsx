import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";
import ContainerLayout from "@/components/ui/containerLayout";

const CatalogoPage = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <ContainerLayout>
      <Badge
        className="mt-[5.7rem] w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8 pt-5">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </ContainerLayout>
  );
};

export default CatalogoPage;
