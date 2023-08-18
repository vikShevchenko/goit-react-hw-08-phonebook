import { Contact } from '../Contacts/Contact';
import css from './ContactsList.module.css'

export const ContactList = ({ contacts }) => {

    return (
        <ul className={css.ulContactsList} >
            {contacts.map(({ id, text }) => (
                <li className={css.liContactList} key={id}>
                    <Contact className={css.contact} id={id} text={text} />
                </li>
            ))}
        </ul>
    );
};