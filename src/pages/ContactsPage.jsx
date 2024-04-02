import { useSelector } from "react-redux"
import { selectorError } from "../redux/contacts/selector"
import css from '../components/App/App.module.css'
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";
import { DocumentTitle } from "../components/DocumentTitle";

 const ContactsPage = () => {
   const error = useSelector(selectorError);
  return (
   <>
        <div className={css.container}>
          <DocumentTitle>Your contacts</DocumentTitle>
        {error && <h1>{error}</h1>}
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
  
     </div>
   </>
   
  )
}



export default ContactsPage