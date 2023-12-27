import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { removeContact } from '../../redux/sliceContact';
import './ContactList.css';

const ContactList = function () {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterContact = e => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  };

  const filteredContacts = filterContact();

  return (
    <ul className="list-name">
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}:{number}</p>
          <button style={{ marginLeft: '10px' }} data-id={id}
            onClick={() => dispatch(removeContact(id))} type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;