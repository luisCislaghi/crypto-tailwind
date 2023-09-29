import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <Link className="p-8 underline underline-offset-4 " href="/dashboard">
        dashboard
      </Link>
    </div>
  );
}
