import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/tasks/operations';
import css from './Contacts.module.css'
import { MdDeleteOutline } from 'react-icons/md';

export const Contact = ({ id, text }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTask(id));
    }

    return (
        <div className={css.contacts}>
            <p className={css.contactsListElement} >{text}</p>
            <button type="button" onClick={handleDelete}
                className={css.contactsButton}>
                <MdDeleteOutline />
            </button>
        </div>
    );
};
