import { Badge } from "@/components/ui/badge";
import ContainerLayout from "@/components/ui/containerLayout";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  };
  return (
    <ContainerLayout>
      <Link href={`/category/${category.slug}`}>
        <Badge
          variant="outline"
          className="flex items-center justify-center gap-1 rounded-lg py-3 hover:bg-accent"
        >
          {categoryIcon[category.slug as keyof typeof categoryIcon]}
          <span className="text-xs font-semibold">{category.name}</span>
        </Badge>
      </Link>
    </ContainerLayout>
  );
};

export default CategoryItem;
