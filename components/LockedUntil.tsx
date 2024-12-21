"use client";

import { useStakingProvider } from "@/providers/StakingProvider";
import { formatUnlockDate } from "@/lib/utils/formatDate";

export function LockedUntil() {
  const { balances } = useStakingProvider();

  if (!balances?.depositTimestamp || !balances?.lockDuration) {
    return (
      <div className="text-center">
        <p className="text-gray-500 text-sm">Locked for 90 Days</p>
      </div>
    );
  }

  const depositTime = Number(balances.depositTimestamp) * 1000;
  const lockDurationSeconds = Number(balances.lockDuration);
  const unlockTime = depositTime + lockDurationSeconds * 1000;
  const days = Math.ceil(lockDurationSeconds / (60 * 60 * 24));

  return (
    <div className="text-center">
      <p className="text-gray-500 text-sm">
        Locked for {days} Days until {formatUnlockDate(unlockTime)}
      </p>
    </div>
  );
}
