import Modal from 'react-modal'
import { useState } from 'react'


import { 
  Container,
  NoteTitle,
  NoteContent,
  ModalDeleteHeader,
  ModalDeleteContent,
  ModalEditHeader,
  ModalEditContent,
} from "./style"
import { api } from '../../services/api'


export function Note({ pencil: Pencil, trash: Trash, x: X, note }) {
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
  const [NewTitle, setNewTitle] = useState(note.title)
  const [NewContent, setNewContent] = useState(note.content)

    const openDeleteModal = () => {
    setModalDeleteIsOpen(true)
  }

  const closeDeleteModal = () => {
    setModalDeleteIsOpen(false)
  }

  const openEditModal = () => {
    setModalEditIsOpen(true)
  }

  const closeEditModal = () => {
    setModalEditIsOpen(false)
  }

  async function handleDeleteNote() {
    await api.delete(`/notes/${note.id}`)

    closeDeleteModal()
  }

  async function handleUpdateNote() {
    if(!NewTitle) {
      return alert('Por favor não deixe o titulo em branco!')
    }

    if(!NewContent) {
      return alert('Por favor não deixe as suas anotações em branco!')
    }

    await api.put(`/notes/${note.id}`, {
      title: NewTitle,
      content: NewContent,
    })

    closeEditModal()
  }
  
  return (
  <Container>
   <NoteTitle>
      <h2>{note.title}</h2>
      <div>
        <button onClick={openEditModal}>
          {Pencil && <Pencil size={28} />}
        </button>
        <button onClick={openDeleteModal}>
          {Trash && <Trash size={28} />}
        </button>
      </div>
    </NoteTitle>

   <NoteContent>
      <p readOnly>
        {note.content}
      </p>
    </NoteContent>

    <Modal
        isOpen={modalDeleteIsOpen}
        onRequestClose={closeDeleteModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.30)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#faf9f9',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
        >
        <ModalDeleteHeader>
            <h1>Tem certeza que você deseja excluir essa nota?</h1>
        </ModalDeleteHeader>

        <ModalDeleteContent>
            <button 
            id='button-no'
            onClick={closeDeleteModal}
            >
              Não
            </button>
            <button 
            id='button-delete'
            onClick={handleDeleteNote}
            >
              Excluir
            </button>
        </ModalDeleteContent>
      
      </Modal>

      <Modal
      isOpen={modalEditIsOpen}
      onRequestClose={closeEditModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.30)',
        },
        content: {
          backgroundColor: '#faf9f9',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
        }
      }}
      >
      <ModalEditHeader>
        <input 
          placeholder={note.title}
          onChange={e => setNewTitle(e.target.value)}
        />
        <button
          onClick={handleUpdateNote}>
          {X && <X size={35} />}
        </button>
      </ModalEditHeader>

      <ModalEditContent>
        <textarea
          placeholder={note.content}
          onChange={e => setNewContent(e.target.value)}
         />
      </ModalEditContent>
      </Modal>
  </Container>
  )
}