"use client";

import { useState } from "react";

export default function Home() {
  const [clicks, setClicks] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 text-center font-sans text-slate-800">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
        🍴 Andy Demo Fork
      </h1>

      <p className="mt-4 max-w-xl text-lg text-slate-600">
        Repositorio de ejemplo para aprender a hacer Fork en GitHub
      </p>

      <div className="mt-10 w-full max-w-sm rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur">
        <p className="text-lg text-slate-700">
          Has hecho click{" "}
          <span className="font-bold text-indigo-600">{clicks}</span>{" "}
          {clicks === 1 ? "vez" : "veces"}
        </p>
        <button
          onClick={() => setClicks((c) => c + 1)}
          className="mt-5 w-full rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Hazme click
        </button>
      </div>

      <footer className="mt-12 text-sm text-slate-500">
        Canal: Andy Cruz AI
      </footer>
    </main>
  );
}
