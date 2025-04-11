import NavMenu from "@/components/nav-menu";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <NavMenu />
      <div className="mt-0 md:mt-12">{children}</div>
    </>
  );
};

export default layout;
