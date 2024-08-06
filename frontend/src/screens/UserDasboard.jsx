import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useGetBooksQuery } from '../slices/bookApiSlice';

const UserDashboard = () => {
  const { data: books, error, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching books!</p>;
  }

  return (
    <Container className="mt-4">
      <h1 className="text-white">User Dashboard</h1>
      <Row>
        {books.map((book) => (
          <Col key={book._id} md={4} className="mb-4">
            <Card className="bg-dark text-white">
             
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text> {/* Display book description */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserDashboard;
