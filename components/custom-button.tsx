import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  style?: string;
};

export const CustomButton = ({ children, style }: Props) => {
  return (
    <button
      className={cn(
        "px-5 py-3 rounded-full shadow-lg transition-colors",
        style
      )}
    >
      {children}
    </button>
  );
};
