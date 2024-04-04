import ContactListItem from "../ContactListItem";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

import {
  selectFilteredContacts,
  selectorIsLoading,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  const isLoading = useSelector(selectorIsLoading);
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}

      <ul className={css.list}>
        {visibleContacts.map((item) => (
          <ContactListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
