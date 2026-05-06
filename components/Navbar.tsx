import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "16px 32px",
        borderBottom: "1px solid #eee",
      }}
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Aontact</Link>
      <Link href={"/product/productId"}>Product</Link>
    </nav>
  );
}
