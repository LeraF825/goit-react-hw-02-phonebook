import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onRemoveContact }) => (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <li className = {s.contactItem}key={contact.id}>
          {contact.name + ":" + contact.number}
          {
            <button
              className={s.BtnDelete}
              type="button"
              name="delte"
              onClick={() => onRemoveContact(contact.id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
  
  ContactList.propTypes = {
    onRemoveContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
  }