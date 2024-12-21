"use client";

import { type ReactNode } from "react";
import PrivyProvider from "./PrivyProvider";
import QueryProvider from "./QueryProvider";
import { StakingProvider } from "./StakingProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <PrivyProvider>
        <StakingProvider>{children}</StakingProvider>
      </PrivyProvider>
    </QueryProvider>
  );
}
