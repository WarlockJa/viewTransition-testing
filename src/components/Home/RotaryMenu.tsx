"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ReactCurvedText from "react-curved-text";
import ScrollText from "./ScrollText";

const DISPLAY_PATHS = ["/tattoo", "/car", "/guitar"] as const;
const LOOKUP: Record<(typeof DISPLAY_PATHS)[number], string> = {
  "/tattoo":
    "TATTOOS - You are now browsing TATTOO category. For safety keep your tattoos hidden away from sun, strong magnets, and police.",
  "/car":
    "CARS - You are now browsing CARS category. Drive safely and never forget to change your blinking fluid.",
  "/guitar":
    "GUITARS - You are now browing GUITARS category. When smashing your guitar after a wicked solo make sure place is vacant of pets this time.",
};

export default function RotaryMenu() {
  const [angle, setAngle] = useState(0);
  const pathname = usePathname() as (typeof DISPLAY_PATHS)[number];

  return (
    <div
      className={cn(
        "relative mx-auto h-96 max-w-[1600px] overflow-hidden",
        !DISPLAY_PATHS.includes(pathname) && "hidden",
      )}
    >
      <div className="absolute inset-x-0 top-[25%] mx-auto h-[1000px] w-[1000px] rounded-full border-4 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
        <div
          className={cn(
            "to-background absolute inset-0 my-auto h-2 w-1/2 origin-right bg-gradient-to-r from-transparent from-5% to-50% transition-transform duration-300",
            angle === 0 && "rotate-45",
            angle === 1 && "rotate-90",
            angle === 2 && "rotate-[135deg]",
          )}
        ></div>
        <div className="bg-foreground/80 absolute inset-0 z-10 m-auto h-3/4 w-3/4 rounded-full">
          <div className="text-background absolute inset-x-0 top-32 mx-auto line-clamp-1 w-1/2 text-2xl text-ellipsis">
            <ScrollText text={LOOKUP[pathname]} length={32} delayMs={100} />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href={"guitar"}
            onClick={() => setAngle(0)}
            className="absolute top-24 left-24 z-10 cursor-pointer rounded-full p-16"
          ></Link>
          <ReactCurvedText
            text="GUITARS"
            width={1000}
            height={1000}
            cx={500}
            cy={500}
            rx={470}
            ry={470}
            startOffset={306}
            textProps={{ style: { fontSize: 32 } }}
            textPathProps={{ fill: "var(--foreground)" }}
            reversed
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href={"car"}
            onClick={() => setAngle(1)}
            className="absolute inset-x-0 -top-1 z-10 mx-auto w-32 cursor-pointer rounded-full p-8"
          ></Link>
          <ReactCurvedText
            text="CARS"
            width={1000}
            height={1000}
            cx={500}
            cy={500}
            rx={460}
            ry={460}
            startOffset={680}
            textProps={{ style: { fontSize: 32 } }}
            textPathProps={{ fill: "var(--foreground)" }}
            reversed
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href={"tattoo"}
            onClick={() => setAngle(2)}
            className="absolute top-24 right-24 z-10 cursor-pointer rounded-full p-16"
          ></Link>
          <ReactCurvedText
            text="TATTOO"
            width={1000}
            height={1000}
            cx={500}
            cy={500}
            rx={460}
            ry={460}
            startOffset={1020}
            textProps={{ style: { fontSize: 32 } }}
            textPathProps={{ fill: "var(--foreground)" }}
            reversed
          />
        </div>
      </div>
    </div>
  );
}
