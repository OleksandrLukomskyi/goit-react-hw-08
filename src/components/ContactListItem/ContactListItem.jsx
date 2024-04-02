import css from "./ContactListItem.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const ContactListItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li key={item.id} className={css.item}>
      {item.name} - {item.number}
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(item.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
