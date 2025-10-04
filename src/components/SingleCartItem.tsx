import { CartItemType } from "@/types";
import { Trash2 } from "lucide-react";
import Image from "next/image";

const SingleCartItem = ({ item }: { item: CartItemType }) => {
  const line_style = "text-xs text-gray-500";

  return (
    <div className="flex items-center justify-between">
      {/* DETAILS and IMAGE */}
      <div className="flex gap-8">
        {/* IMAGE */}
        <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={item.images[item.selectedColor]}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>

        {/* ITEM DETAILS */}
        <div className="flex flex-col justify-between">
          <div className="">
            <p className={line_style}>Quantity: {item.quantity}</p>
            <p className={line_style}>Size: {item.selectedSize}</p>
            <p className={line_style}>Color: {item.selectedColor}</p>
          </div>
          <p className="font-medium">${item.price.toFixed(2)}</p>
        </div>
      </div>
      {/* DELETE button */}
      <button className="w-8 h-8 rounded-full bg-red-100 text-red-400 hover:bg-red-200 transition-all duration-300 flex items-center justify-center cursor-pointer">
        <Trash2 className="w-3 h-3" />
      </button>
    </div>
  );
};

export default SingleCartItem;
