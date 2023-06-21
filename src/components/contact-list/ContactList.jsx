import ContactListItem from '../contact-list-item/ContactListItem';
import style from '../contact-list/style.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import filterFunction from '../../utils/filter';







function ContactList({ handleDelete }) {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filterFunction(contacts, filter);


  return (
    <ul className={style.contactList}>
      {contacts.length > 0 &&
      filteredContacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default ContactList;