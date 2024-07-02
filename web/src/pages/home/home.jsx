import { MagnifyingGlass, PencilSimple, Trash, X } from 'phosphor-react'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'

import { 
  Container,
  NotesSpace,
  ModalCreateHeader,
  ModalCreateContent,
} from './style'
import { Header } from '../../components/header/header.jsx'
import { Input } from '../../components/input/input.jsx'
import { Note } from '../../components/note/note.jsx'
import { Button } from '../../components/button/button.jsx'
import { api } from '../../services/api'

Modal.setAppElement('#root')

document.addEventListener('submit', function(event) {
  event.preventDefault()
})

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  async function handleCreateNote() {
    if(!title) {
      return alert('Por favor não deixe o titulo em branco!')
    }

    if(!content) {
      return alert('Por favor não deixe as suas anotações em branco!')
    }

    await api.post('/notes', {
      title,
      content,
    })

    const newNote = {
      title,
      content
    }

    setNotes([...notes, newNote]);

    closeModalCreate()

    alert('✔️ Alterações salvas com sucesso!')
  }

  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false)

  const openModalCreate = () => {
    setModalCreateIsOpen(true)
  }

  const closeModalCreate = () => {
    setModalCreateIsOpen(false)
  }

  useEffect(() => {
    async function listNotes() {
      const res = await api.get(`/notes?title=${search}`)
      setNotes(res.data)
    }

    listNotes()
  }, [search])

  return (
    <Container>
      <Header />
      <div>
        <Input 
          placeholder='Pesquisar'
          type='text'
          icon={MagnifyingGlass}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Button title='New note' onClick={openModalCreate}/>

      <NotesSpace>
        {notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            pencil={PencilSimple}
            trash={Trash}
            x ={X}
            />
        ))}

      </NotesSpace>

      <Modal
      isOpen={modalCreateIsOpen}
      onRequestClose={closeModalCreate}
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
      <ModalCreateHeader>
        <input 
          placeholder={'Titulo da nota'}
          onChange={e => setTitle(e.target.value)}
        />
        <button
          onClick={handleCreateNote}>
          {X && <X size={35} />}
        </button>
      </ModalCreateHeader>

      <ModalCreateContent>
        <textarea
          placeholder='Digite as suas anotações aqui...'
          onChange={e => setContent(e.target.value)}
         />
      </ModalCreateContent>
      </Modal>
     </Container>
  )
}