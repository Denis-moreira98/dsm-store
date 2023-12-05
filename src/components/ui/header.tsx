import { Card } from "./card";
import { Button } from "./button";
import { MenuIcon, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button size="icon" variant={"outline"}>
        <MenuIcon />
      </Button>
      <h1 className="text-lg font-semibold ">
        <span className="text-primary">DSM</span> STORE
      </h1>
      <Button size="icon" variant={"outline"}>
        <ShoppingCart />
      </Button>
    </Card>
  );
};

export default Header;
