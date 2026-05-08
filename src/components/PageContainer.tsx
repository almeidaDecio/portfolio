import { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-16 lg:py-20">
      {children}
    </div>
  );
}
