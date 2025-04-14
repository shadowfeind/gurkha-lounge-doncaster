import type { MainMenu } from "@/types";
import { MenuItem } from "./menu-item";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface MenuSectionProps {
  section: MainMenu;
}

export function MenuSection({ section }: MenuSectionProps) {
  return (
    <section>
      <Card className="border-amber-200 bg-white/80 backdrop-blur-sm shadow-md">
        <CardHeader className="border-b border-amber-100 bg-amber-50/50">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900">
              {section.title}
            </h2>
            {section.special && (
              <p className="mt-2 text-sm italic text-amber-700">
                {section.special}
              </p>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-6">
            {section.menu.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
