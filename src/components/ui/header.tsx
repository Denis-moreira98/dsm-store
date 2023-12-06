"use client";

import { Card } from "./card";
import { Button } from "./button";
import {
  MenuIcon,
  ShoppingCart,
  LogInIcon,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
  LogOut,
} from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import logoSvg from "../../assets/logo.svg";
import Image from "next/image";

const Header = () => {
  const { data, status } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogOutClick = async () => {
    await signOut();
  };
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="flex flex-col">
            <div className="item-center my-4 flex gap-2 py-4">
              {status === "authenticated" && data?.user && (
                <Avatar>
                  {data?.user.image && <AvatarImage src={data?.user.image} />}
                  <AvatarFallback>
                    {data?.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              )}
              <div className="flex flex-col">
                <p className="font-medium">{data?.user?.name}</p>
                <p className="text-sm opacity-75">Boas compras!</p>
              </div>
            </div>
            <Separator />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogOutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOut size={16} />
                Fazer LogOut
              </Button>
            )}

            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Home
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <Image
        src={logoSvg}
        alt="logo"
        quality={100}
        height={55}
        className="max-sm:h-9"
      />
      <Button size="icon" variant={"outline"}>
        <ShoppingCart />
      </Button>
    </Card>
  );
};

export default Header;
