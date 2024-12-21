"use client";

import { useStakingProvider } from "@/providers/StakingProvider";
import { formatEther } from "viem";
import { WalletCards } from "lucide-react";

export function TokenBalance() {
  const { balances } = useStakingProvider();
  const tokenBalance = formatEther(balances?.tokenBalance ?? BigInt(0));

  return (
    <div className="flex items-center gap-2">
      <WalletCards color="gray" className="opacity-50" />
      <span className="text-gray-600">
        {parseFloat(tokenBalance).toFixed(0)}
      </span>
    </div>
  );
}
