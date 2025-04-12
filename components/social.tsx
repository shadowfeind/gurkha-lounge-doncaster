import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const SocialLinks = () => (
  <div
    className={`fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 transition-opacity duration-300}`}
  >
    <SocialIcon Icon={Facebook} />
    <SocialIcon Icon={Instagram} />
    <SocialIcon Icon={Twitter} />
    <SocialIcon Icon={Youtube} />
  </div>
);

const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <a
    href="#"
    className="h-10 w-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:text-amber-200 hover:border-amber-200 transition-colors opacity-70"
  >
    <Icon className="h-5 w-5" />
  </a>
);
