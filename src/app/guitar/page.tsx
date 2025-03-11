import { unstable_ViewTransition as ViewTransition } from "react";
import guitars from "@/lib/data/guitars";
import Link from "next/link";

export const runtime = "edge";

export default function page() {
  return (
    <>
      <h1 className="mt-20 mb-8 text-center text-3xl font-bold">
        Featured Guitars
      </h1>
      <div className="flex flex-wrap justify-center gap-12">
        {guitars.map((guitar) => (
          <div
            key={guitar.id}
            className="relative mb-24 w-full md:w-[calc(50%-1.5rem)] xl:w-[calc(33.333%-2rem)]"
          >
            <Link href={`/guitar/${guitar.id}`} className="group block">
              <div className="relative z-0 mb-8 aspect-square w-full">
                <div className="h-full w-full overflow-hidden rounded-2xl border-4 border-gray-800 shadow-2xl">
                  <ViewTransition name={`guitar-${guitar.id}`}>
                    <img
                      src={guitar.image}
                      alt={guitar.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </ViewTransition>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              </div>

              <ViewTransition name="short-description">
                <div className="absolute right-0 bottom-0 z-10 w-[80%] translate-y-[40%] transform rounded-2xl border border-gray-800/50 bg-gray-900/60 p-5 shadow-xl backdrop-blur-md">
                  <h2 className="mb-2 text-xl font-bold">{guitar.name}</h2>
                  <p className="mb-3 line-clamp-2 text-gray-300">
                    {guitar.shortDescription}
                  </p>
                  <div className="text-xl font-bold text-emerald-400">
                    ${guitar.price}
                  </div>
                </div>
              </ViewTransition>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
