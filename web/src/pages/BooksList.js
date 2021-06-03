import React, { useEffect, useState } from 'react';

import DeleteBookModal from '../components/DeleteBookModal';
import EditBookModal from '../components/EditBookModal';

import api from '../services/api';

import { MdEdit, MdDelete } from 'react-icons/md';
import '../styles/pages/BooksList.css';

const BooksList = () => {
  const [books, setBooks] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  useEffect(() => {
    async function fetchBooksData() {
      await api.get('/books').then((res) => {
        setBooks(res.data);
      });
    }

    fetchBooksData();
  }, []);

  function closeModal() {
    setIsDeleteModalVisible(false);
    setIsEditModalVisible(false);
  }

  async function handleDeleteBook(book) {
    setSelectedBook(book);
    setIsDeleteModalVisible(true);
  }

  async function handleEditBook(book) {
    setSelectedBook(book);
    setIsEditModalVisible(true);
  }

  return (
    <div className="container">
      <DeleteBookModal
        book={selectedBook}
        isVisible={isDeleteModalVisible}
        closeModal={closeModal}
      />
      <EditBookModal
        book={selectedBook}
        isVisible={isEditModalVisible}
        closeModal={closeModal}
      />
      <nav className="header">
        <h1>Livraria</h1>
      </nav>

      <div className="books-list">
        <h2>Seus livros</h2>
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Gênero</th>
                <th>Editora</th>
                <th>Preço</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
              {books &&
                books.map((book) => (
                  <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.gender}</td>
                    <td>{book.publishing}</td>
                    <td>{book.price}</td>
                    <td>
                      <button
                        className="action-button"
                        onClick={() => handleEditBook(book)}
                      >
                        <MdEdit size={18} color="#3a3a3a" />
                      </button>
                    </td>
                    <td>
                      <button
                        className="action-button"
                        onClick={() => handleDeleteBook(book)}
                      >
                        <MdDelete size={18} color="#d91e18" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
