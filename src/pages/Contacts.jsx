import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorError } from "../redux/contacts/selectors";
import css from "../components/App/App.module.css";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";
import { DocumentTitle } from "../components/DocumentTitle";
import { fetchContacts } from "../redux/contacts/operations";

const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectorError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <DocumentTitle>Your contacts</DocumentTitle>
        {error && <h1>{error}</h1>}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default Contacts;
