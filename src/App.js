import { Container, Title, TitleContacts } from './App.styles'
import { TiContacts } from 'react-icons/ti'
import { IoIosContacts } from 'react-icons/io'
import { Toaster } from 'react-hot-toast'
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'
import ContactList from './components/ContactList'

function App() {
  return (
    <Container>
      <Title>
        <TiContacts /> Phonebook
      </Title>
      <ContactForm />
      <TitleContacts>
        <IoIosContacts />
        Contacts
      </TitleContacts>
      <Filter />
      <ContactList />
      <Toaster />
    </Container>
  )
}

export default App
