"use client";

import { Button } from "@/components/ui/button";
import { useStakingProvider } from "@/providers/StakingProvider";

export function StakeButton() {
  const { handleStake, isDepositing } = useStakingProvider();

  return (
    <Button
      onClick={handleStake}
      disabled={isDepositing}
      className="w-full bg-[#FA9866] hover:bg-[#E9A684]/90 text-white rounded-3xl h-12"
    >
      {isDepositing ? "Staking..." : "Stake"}
    </Button>
  );
}
