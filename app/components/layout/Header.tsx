import Image from 'next/image';
import Container from './Container';

const Header = ({ title }: { title: string }) => {
  return (
    <div className="bg-white p-6 border-b border-black/10">
      <Container className="flex gap-4 items-center">
        <Image
          src="/images/kannact-transparent.png"
          alt="Kannact"
          width={200}
          height={200}
        />
        <h1 className="text-xl">{title}</h1>
      </Container>
    </div>
  );
};

export default Header;
