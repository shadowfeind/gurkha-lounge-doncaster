import type { SubMenu } from "@/types";

interface MenuItemProps {
  item: SubMenu;
}

export function MenuItem({ item }: MenuItemProps) {
  // Format price display
  const formatPrice = (price: number | string) => {
    if (typeof price === "number") {
      // Don't display price if it's 0
      if (price === 0) return "";
      return `£${price.toFixed(2)}`;
    }
    // For string prices like "6.00/6.50"
    return `£${price}`;
  };

  const priceDisplay = formatPrice(item.price);

  return (
    <div className="group">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="font-medium text-amber-950 group-hover:text-amber-700 transition-colors">
          {item.title}
        </h3>
        <div className="border-b border-dotted border-amber-300 flex-grow"></div>
        {priceDisplay && (
          <span className="font-medium text-amber-800">{priceDisplay}</span>
        )}
      </div>
      <p className="mt-1 text-sm text-gray-600">{item.description}</p>
    </div>
  );
}
