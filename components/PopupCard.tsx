"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { StakeInput } from "@/components/StakeInput";
import { StakeButton } from "@/components/StakeButton";
import { TokenBalance } from "@/components/TokenBalance";
import { LockedUntil } from "@/components/LockedUntil";
import { DottedLine } from "@/components/DottedLine";

export function PopupCard() {
  return (
    <Card className="w-full max-w-md p-6 space-y-6 rounded-3xl">
      {/* Title Row */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Stake Song</h2>
      </div>

      {/* Description Row */}
      <div className="text-center">
        <p className="text-gray-500">Stake your songcoins to earn COOP</p>
      </div>

      {/* Labels Row */}
      <div className="flex justify-between items-center">
        <span className="text-gray-500">Amount to lock</span>
        <TokenBalance />
      </div>

      <StakeInput />
      <LockedUntil />
      <DottedLine />

      {/* Earn Row */}
      <div className="flex justify-between items-center">
        <span className="font-medium">Earn</span>
        <div className="flex items-center gap-2">
          <span className="font-medium">1000</span>
          <Image
            src="/coop-points.svg"
            alt="COOP token"
            width={33}
            height={33}
            className="rounded-full"
          />
        </div>
      </div>

      <StakeButton />
    </Card>
  );
}
