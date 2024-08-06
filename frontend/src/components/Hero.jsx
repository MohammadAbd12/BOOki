import { Container, Card } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
      <Container>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light'>
          <h1 className='text-center mb-4'>Welcome to BOOki</h1>
          <p className='text-center mb-4'>
            Explore a wide selection of books, borrow your favorites, and enjoy a seamless reading experience.
          </p>
          <p className='text-center mb-4'>
            Our library offers a diverse collection that caters to every reader's taste. Whether you're looking for the latest bestsellers, classic literature, or specialized genres, you'll find something to love. Join us and embark on a journey through the world of books!
          </p>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
