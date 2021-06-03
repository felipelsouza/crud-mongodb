import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';

import api from '../services/api';

import '../styles/components/form.css';
import '../styles/components/modal.css';

function Dialog({ isVisible, closeModal, book }) {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newGender, setNewGender] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newPublishing, setNewPublishing] = useState('');

  useEffect(() => {
    if (book) {
      setNewTitle(book.title);
      setNewAuthor(book.author);
      setNewGender(book.gender);
      setNewPrice(book.price);
      setNewPublishing(book.publishing);
    }
  }, [book]);

  async function handleSubmitForm(event) {
    event.preventDefault();

    await api.put(`/books/${book._id}`, {
      title: newTitle,
      author: newAuthor,
      gender: newGender,
      price: newPrice,
      publishing: newPublishing,
    });
  }

  return (
    <Modal open={isVisible} onClose={closeModal} className="modal">
      <div className="dialog">
        <form onSubmit={handleSubmitForm} className="form-content">
          <h3 className="modal-title">Editar livro</h3>
          <div className="field">
            <label htmlFor="title">Título</label>
            <input
              id="title"
              type="text"
              defaultValue={newTitle}
              maxLength="100"
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
              className="modal-input"
            />
          </div>
          <div className="field">
            <label htmlFor="title">Autor</label>
            <input
              id="title"
              type="text"
              defaultValue={newAuthor}
              maxLength="100"
              value={newAuthor}
              onChange={(event) => setNewAuthor(event.target.value)}
              className="modal-input"
            />
          </div>
          <div className="field">
            <label htmlFor="title">Gênero</label>
            <input
              id="title"
              type="text"
              defaultValue={newGender}
              maxLength="100"
              value={newGender}
              onChange={(event) => setNewGender(event.target.value)}
              className="modal-input"
            />
          </div>
          <div className="field">
            <label htmlFor="title">Editora</label>
            <input
              id="title"
              type="text"
              defaultValue={newPublishing}
              maxLength="100"
              value={newPublishing}
              onChange={(event) => setNewPublishing(event.target.value)}
              className="modal-input"
            />
          </div>
          <div className="field">
            <label htmlFor="title">Preço</label>
            <input
              id="title"
              type="text"
              defaultValue={newPrice}
              maxLength="100"
              value={newPrice}
              onChange={(event) => setNewPrice(event.target.value)}
              className="modal-input"
            />
          </div>
          <div className="buttons-container">
            <button
              onClick={closeModal}
              className="submit-button modal-button cancel-button"
            >
              Cancelar
            </button>
            <button type="submit" className="submit-button modal-button">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default Dialog;
