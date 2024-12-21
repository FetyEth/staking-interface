"use client";

import { useStakingProvider } from "@/providers/StakingProvider";
import Image from "next/image";
import { parseEther } from "viem";

export function StakeInput() {
  const {
    balances,
    stakeAmount,
    setStakeAmount,
    handleStake,
    handleApprove,
    isApproving,
    isDepositing,
  } = useStakingProvider();

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      try {
        const parsedAmount = parseEther(stakeAmount);
        const currentAllowance = balances?.allowance ?? BigInt(0);

        if (parsedAmount > currentAllowance) {
          const approvalHash = await handleApprove();
          console.log("Approval transaction hash:", approvalHash);
        }

        await handleStake();
      } catch (error) {
        console.error("Error in staking process:", error);
      }
    }
  };

  const isProcessing = isApproving || isDepositing;

  return (
    <div>
      <div className="bg-gray-50 rounded-2xl p-2 flex items-center">
        <input
          type="number"
          min="0"
          step="any"
          placeholder="Enter amount"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isProcessing}
          className="border-0 bg-transparent text-lg w-full p-0 focus:outline-none focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50"
        />
        <div className="flex items-center gap-2 pr-4">
          <Image
            src="https://ipfs.decentralized-content.com/ipfs/QmcTqdWEkevrzESmS8um7i88kcM3AY5oLLbKSZL3ToPqjX"
            alt="IJN token"
            width={24}
            height={24}
            className="rounded rounded-xl"
          />
          <span className="font-medium">IJN</span>
        </div>
      </div>
      {isProcessing && (
        <div className="text-start text-sm text-gray-500">
          {isApproving ? "Approving tokens..." : "Depositing tokens..."}
        </div>
      )}
    </div>
  );
}
