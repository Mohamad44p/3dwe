import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";

export default function Hero() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <section className="w-full py-12 h-screen relative ">
      <div className="container absolute top-[40%] left-20 z-20">
        <div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Step into Style with Our Latest <br/>
                <FlipWords words={words} />
                Shoes Collection
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover the perfect blend of comfort and fashion with our
                meticulously crafted shoes. Elevate your style and step out in
                confidence.
              </p>
            </div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
