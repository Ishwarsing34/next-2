"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-screen w-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-zinc-800 bg-zinc-900 p-4 md:flex">
        <button className="mb-6 rounded-lg border border-zinc-700 px-4 py-2 text-left hover:bg-zinc-800">
          + New Chat
        </button>

        <div className="space-y-2 text-sm text-zinc-300">
          <div className="cursor-pointer rounded-lg p-3 hover:bg-zinc-800">
            Explain Docker
          </div>

          <div className="cursor-pointer rounded-lg p-3 hover:bg-zinc-800">
            Learn TypeScript
          </div>

          <div className="cursor-pointer rounded-lg p-3 hover:bg-zinc-800">
            Build a Next.js app
          </div>
        </div>

        <div className="mt-auto border-t border-zinc-800 pt-4">
          <div className="rounded-lg p-3 text-sm hover:bg-zinc-800">
            ⚙ Settings
          </div>
        </div>
      </aside>

      {/* Main Chat */}
      <main className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-14 items-center border-b border-zinc-800 px-6">
          <h1 className="font-semibold">My AI</h1>
        </header>

     

        <div className="border-t border-zinc-800 p-4">
          <div className="mx-auto flex max-w-3xl items-end gap-3 rounded-2xl border border-zinc-700 bg-zinc-900 p-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message My AI..."
              rows={1}
              className="max-h-40 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-zinc-500"
            />

            <button
              onClick={() => {
                console.log(message);
                setMessage("");
              }}
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200"
            >
              ↑
            </button>
          </div>

          <p className="mt-2 text-center text-xs text-zinc-500">
            My AI can make mistakes. Check important information.
          </p>
        </div>
      </main>
    </div>
  );
}