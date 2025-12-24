import tattoos from "@/lib/data/tattoo";
import { use, ViewTransition } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TattoosPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const tattoo = tattoos.find((tattoo) => tattoo.id === parseInt(id));

  if (!tattoo) {
    return <div className="px-4 py-8">Tattoo not found</div>;
  }

  return (
    <div className="from-background to-foreground/20 bg-linear-to-br px-4 py-8">
      <div className="relative flex min-h-[93vh] items-end">
        <ViewTransition name="description">
          <div className="relative z-10 w-[60%] rounded-2xl border border-gray-800/50 bg-gray-900/60 p-8 shadow-xl backdrop-blur-md">
            <Link
              href="/tattoo"
              className="mb-4 flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
            >
              <ArrowLeft /> Back to all tattoos
            </Link>
            <h1 className="mb-4 text-3xl font-bold">{tattoo.name}</h1>
            <p className="mb-6 text-gray-300">{tattoo.description}</p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-emerald-400">
                ${tattoo.price}
              </div>
              <button className="rounded-lg bg-emerald-600 px-6 py-2 text-white transition-colors hover:bg-emerald-500">
                Add to Cart
              </button>
            </div>
          </div>
        </ViewTransition>

        <div className="absolute top-0 right-0 z-0 aspect-video w-[55%]">
          <div className="h-full w-full overflow-hidden rounded-2xl border-4 border-gray-800 shadow-2xl">
            <ViewTransition name={`tattoo-${id}`}>
              <img
                src={tattoo.image}
                alt={tattoo.name}
                className="h-full w-full object-cover"
              />
            </ViewTransition>
          </div>
        </div>
      </div>
    </div>
  );
}
