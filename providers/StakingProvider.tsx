"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useErc20Approve } from "@/hooks/useErc20Approve";
import { useStakeDeposit } from "@/hooks/useStakeDeposit";
import { useBalances } from "@/hooks/useBalances";

interface StakingContextType {
  stakeAmount: string;
  setStakeAmount: (amount: string) => void;
  isApproving: boolean;
  isDepositing: boolean;
  balances: any;
  handleStake: () => Promise<void>;
  handleApprove: () => Promise<void>;
}

const StakingContext = createContext<StakingContextType | undefined>(undefined);

export function StakingProvider({ children }: { children: ReactNode }) {
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const { login, authenticated } = usePrivy();
  const { approve, isApproving } = useErc20Approve();
  const { deposit, isDepositing } = useStakeDeposit();
  const { data: balances } = useBalances();

  const handleApprove = async () => {
    if (!authenticated) {
      login();
      return;
    }
    await approve(stakeAmount);
  };

  const handleStake = async () => {
    if (!authenticated) {
      login();
      return;
    }
    await deposit(stakeAmount);
    setStakeAmount("");
  };

  return (
    <StakingContext.Provider
      value={{
        stakeAmount,
        setStakeAmount,
        isApproving,
        isDepositing,
        balances,
        handleStake,
        handleApprove,
      }}
    >
      {children}
    </StakingContext.Provider>
  );
}

export function useStakingProvider() {
  const context = useContext(StakingContext);
  if (context === undefined) {
    throw new Error("useStakingProvider must be used within a StakingProvider");
  }
  return context;
}
