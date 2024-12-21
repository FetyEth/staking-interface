"use client";

import { PopupCard } from "@/components/PopupCard";

export default function Home() {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm">
      <main className="min-h-screen flex items-center justify-center p-4">
        <PopupCard />
      </main>
    </div>
  );
}
