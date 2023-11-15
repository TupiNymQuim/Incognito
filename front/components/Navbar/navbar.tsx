import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

type Props = {
  type?: string;
};

const Navbar = ({ type }: Props) => {
  const classValue = type == "About" ? styles.listAbout : styles.list;

  return (
    <nav>
      <div className={classValue}>
        {type == "About" && (
          <Link href="/">
            <Image alt="Logo" src="/logo.png" width={100} height={100}></Image>
          </Link>
        )}
        <Link href="/About">
          <li className={styles.navbar}>
            <i>
              <h4>About</h4>
            </i>
            <i className="fa-solid fa-circle" style={{ color: "#ffffff" }}></i>
            <i className="fa-solid fa-circle" style={{ color: "#ffffff" }}></i>
          </li>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
