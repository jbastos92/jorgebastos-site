import Link from "next/link";

const items = [
  { href: "/", label: "About" },
  { href: "/career/", label: "Career" },
  { href: "/projects/", label: "Projects" },
  { href: "/posts/", label: "Posts" },
];

export default function Nav() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Jorge Bastos
        </Link>
        <ul className="flex gap-5 text-sm text-zinc-600 dark:text-zinc-400">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-zinc-950 dark:hover:text-zinc-50">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
