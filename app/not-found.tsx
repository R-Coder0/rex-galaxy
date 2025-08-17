// app/not-found.tsx
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 px-4 text-center">
      <div className="relative w-72 h-28 mb-8">
        <Image
          src="/coming-soon.png" // put your image in /public folder
          alt="Lost in space illustration"
          fill
          className="object-contain"
          priority
        />
      </div>

      <h1 className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
        404
      </h1>

      <p className="mt-4 text-lg text-gray-300 max-w-md">
        Looks like this page is still under construction or doesn’t exist yet.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-2xl"
      >
        Back to Home
      </Link>
    </main>
  );
}
