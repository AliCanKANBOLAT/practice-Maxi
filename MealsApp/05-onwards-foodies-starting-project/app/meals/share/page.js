import Link from "next/link";



export default function Share() {
  return(
    <>
    <h1>Share</h1>
    <p> <Link href="/meals/slugmeals1"> Go to meals1 </Link> </p>
    <p> <Link href="/meals/slugmeals2"> Go to meals2 </Link> </p>
    <p> <Link href="/meals/slugmeals3"> Go to meals3 </Link> </p>

    </>
  )
}