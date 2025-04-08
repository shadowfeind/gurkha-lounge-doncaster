import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-full w-full flex justify-center align-middle gap-2">
      <Button>Testing</Button>
      <Button size={"sm"}>Testing</Button>
      <Button size={"lg"}>Testing</Button>
      <Button size={"icon"}>Testing</Button>
    </div>
  );
}
