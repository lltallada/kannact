import Link from "next/link";
import Container from "./components/layout/Container";
import Image from "next/image";

export default function Home() {

  return (
      <Container>
        <div className="flex flex-col items-center justify-center h-screen p-20">
          <Image src="/images/kannactLogo.png" alt="Kannact" width={200} height={200} />

          <Link href="/patients">
            My Patients
          </Link>
        </div>
      </Container>
  );
}
