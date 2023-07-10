import Link from "next/link";

export default function AccountInfo() {
  return (
    <>
      <p>This is account info</p>
      <Link href={"/dashboard/orders"}>To account info</Link>
    </>
  );
}
