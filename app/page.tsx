import Container from './components/layout/Container';
import Image from 'next/image';
import Button from './components/ui/Button';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center h-screen p-20 gap-4">
        <Image
          src="/images/kannact.jpeg"
          alt="Kannact"
          width={175}
          height={175}
          className="rounded-xl overflow-x-hidden"
        />

        <Button href="/patients">Go to /patients</Button>
      </div>
    </Container>
  );
}
