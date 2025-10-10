"use client";
import { ProductType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";
import { useState } from "react";
import useCartStore from "@/stores/cartStore";

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  const handleVariantChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    });
    toast.success("Product added to cart");
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE___________*/}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500"> Size </span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              className={`cursor-pointer border-1 p-[2px] ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
              key={size}
              onClick={() => handleVariantChange("size", size)}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLOR___________ */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500"> Color </span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border-1 p-[2px] rounded-full ${
                selectedColor === color ? "border-gray-600" : "border-gray-200"
              }`}
              key={color}
              onClick={() => handleVariantChange("color", color)}
            >
              <div
                className={`w-6 h-6 rounded-full`}
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* QUANTITY___________ */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQuantityChange("decrement")}
            className="cursor-pointer border-1 border-gray-300 p-1 "
          >
            <Minus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increment")}
            className="cursor-pointer border-1 border-gray-300 p-1 "
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ACTION BUTTONS___________ */}
      <button
        onClick={handleAddToCart}
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer"
      >
        <Plus className="w-4 h-4" /> Add to Cart
      </button>

      <button className="bg-white text-gray-800 ring-1 ring-gray-400 px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer">
        <ShoppingCart className="w-4 h-4" /> Buy this item
      </button>

      {/* End of html--------- */}
    </div>
  );
};

export default ProductInteraction;
