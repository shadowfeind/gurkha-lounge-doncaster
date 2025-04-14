"use client";

import { useState } from "react";
import type { SubMenu } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { dishMenu } from "@/menu/menu";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>(
    dishMenu[0].title
  );

  const toggleCategory = (title: string) => {
    setActiveCategory(activeCategory === title ? "" : title);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-center mb-12 font-serif text-amber-800">
        Our Menu
      </h1>

      <div className="space-y-8">
        {dishMenu.map((category) => (
          <div
            key={category.title}
            className="border border-amber-200 rounded-lg overflow-hidden bg-white shadow-md"
          >
            <button
              onClick={() => toggleCategory(category.title)}
              className="w-full flex justify-between items-center p-4 bg-amber-50 hover:bg-amber-100 transition-colors"
            >
              <h2 className="text-xl font-semibold text-amber-900 font-serif">
                {category.title}
              </h2>
              {activeCategory === category.title ? (
                <ChevronUp className="h-6 w-6 text-amber-700" />
              ) : (
                <ChevronDown className="h-6 w-6 text-amber-700" />
              )}
            </button>

            <div
              className={cn(
                "transition-all duration-300 ease-in-out overflow-hidden",
                activeCategory === category.title
                  ? "max-h-[5000px] opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              {category.special && (
                <div className="px-4 py-3 bg-amber-100 italic text-amber-800 text-sm">
                  {category.special}
                </div>
              )}

              <div className="p-4 space-y-4">
                {category.menu.map((item, index) => (
                  <MenuItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuItem({ item }: { item: SubMenu }) {
  return (
    <div className="flex justify-between border-b border-amber-100 pb-3 group hover:bg-amber-50 p-2 rounded-md transition-colors">
      <div className="flex-1">
        <h3 className="font-medium text-amber-900 group-hover:text-amber-700">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
      </div>
      <div className="ml-4 text-amber-800 font-semibold whitespace-nowrap">
        {typeof item.price === "number"
          ? item.price > 0
            ? `£${item.price.toFixed(2)}`
            : ""
          : `£${item.price}`}
      </div>
    </div>
  );
}
