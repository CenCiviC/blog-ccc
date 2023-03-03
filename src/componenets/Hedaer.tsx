import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Home.module.css";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <Image
            src="logobn.svg"
            alt="Logo of cencivic site"
            width={200}
            height={50}
          />
        </Link>

        <ul className="chapter">
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/knowledge">Knowledge</Link>
          </li>
          <li>
            <Link href="/storage">Storage</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
