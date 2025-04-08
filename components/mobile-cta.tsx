import { Phone } from "lucide-react";

export const MobileCTA = () => {
  return (
    <div
      className={`fixed bottom-24 right-6 z-50 md:hidden transition-all duration-300"translate-y-0 opacity-100"}`}
    >
      <button className="flex items-center gap-2 bg-amber-200 text-black font-medium px-5 py-3 rounded-full shadow-lg hover:bg-amber-300 transition-colors">
        <div className="p-2 bg-white rounded-2xl">
          <Phone className="size-5" />
        </div>
        ORDER NOW
      </button>
    </div>
  );
};
