import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/meals">Go to meals</Link></p>
      <p><Link href="/community">Go to  community</Link></p>
      <p><Link href="/meals/share">share</Link></p>
    </main>
  );
}
