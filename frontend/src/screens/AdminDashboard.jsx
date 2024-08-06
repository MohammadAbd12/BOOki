import React, { useState } from "react";
import { Form, Button, Table, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  useCreateBookMutation,
  useGetBooksQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} from "../slices/bookApiSlice";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingBookId, setEditingBookId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingDescription, setEditingDescription] = useState("");

  const { data: books, refetch } = useGetBooksQuery();
  const [createBook] = useCreateBookMutation();
  const [updateBook] = useUpdateBookMutation();
  const [deleteBook] = useDeleteBookMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    const bookData = { title, description }; // No image field here

    try {
      await createBook(bookData).unwrap();
      refetch();
      setTitle("");
      setDescription("");
      toast.success("Book added successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const editBookHandler = (book) => {
    setEditingBookId(book._id);
    setEditingTitle(book.title);
    setEditingDescription(book.description);
  };

  const handleSaveEdit = async () => {
    const bookData = { title: editingTitle, description: editingDescription }; // No image field here

    try {
      await updateBook({ id: editingBookId, data: bookData }).unwrap();
      refetch();
      setEditingBookId(null);
      setEditingTitle("");
      setEditingDescription("");
      toast.success("Book updated successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteBook(id).unwrap();
        refetch();
        toast.success("Book deleted successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="text-white">Admin Dashboard</h1>
      <Form onSubmit={submitHandler} className="bg-dark p-4 rounded">
        <Form.Group controlId="title">
          <Form.Label className="text-white">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label className="text-white">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" variant="success">
          Add Book
        </Button>
      </Form>

      <h2 className="mt-4 text-white">Books List</h2>
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => (
              <tr key={book._id}>
                <td>
                  {editingBookId === book._id ? (
                    <Form.Control
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                    />
                  ) : (
                    book.title
                  )}
                </td>
                <td>
                  {editingBookId === book._id ? (
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={editingDescription}
                      onChange={(e) => setEditingDescription(e.target.value)}
                    />
                  ) : (
                    book.description
                  )}
                </td>
                <td>
                  {editingBookId === book._id ? (
                    <>
                      <Button variant="success" onClick={handleSaveEdit}>
                        Save
                      </Button>
                      <Button
                        variant="light"
                        onClick={() => setEditingBookId(null)}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="light"
                      onClick={() => editBookHandler(book)}
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    variant="danger"
                    onClick={() => deleteHandler(book._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminDashboard;
