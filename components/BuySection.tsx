import { toast } from "sonner";
import { Input } from "./ui/input";

export const BuyNow = () => {
  return (
    <section className="third-section h-[120vh] relative">
      <div className="z-20 absolute top-[30%] left-24 flex flex-col justify-center border p-5 rounded-lg">
        <h1 className="font-bold text-5xl text-white">Step Up Your Game</h1>
        <p className="text-white text-xl pt-2">
          Get your hands on the iconic Nike Air Jordan shoes. Fill in your
          details below to make a purchase.
        </p>
        <div className="flex items-center gap-2 pt-2">
          <Input
            type="text"
            className="border flex-1"
            placeholder="Your Name..."
          />
          <Input
            type="text"
            className="border rounded-md p-2 flex-1"
            placeholder="Your Email..."
          />
        </div>
        <select className="mt-2 p-2 bg-black text-white rounded-lg flex-1">
          <option value="">Select Your Favorite Air Jordan</option>
          <option value="">Air Jordan 1 Retro High OG</option>
          <option value="">Air Jordan 4 Retro</option>
          <option value="">Air Jordan 11 Retro</option>
          <option value="">Air Jordan 6 Retro</option>
          <option value="">Air Jordan 5 Retro</option>
        </select>
        <button
          onClick={() => toast.success("Purchase successful!")}
          className="border p-2 mt-2 rounded-lg hover:bg-orange-500 hover:text-white transition duration-500"
        >
          Buy Now
        </button>
      </div>
    </section>
  );
};
