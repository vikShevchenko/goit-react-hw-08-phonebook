import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/operations';
import css from './ContactEditor.module.css'
import { sortListItems } from '../../redux/tasks/slice'

export const ContactEditor = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {

        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        if (name !== '' || number !== '') {

            dispatch(addTask(`${name}: ${number}`));
            form.reset();
            return name
        }
        alert('Contact cannot be empty. Enter some Name and number!');
    };

    return (
        <div className={css.container}>
            <h2>Contacts</h2>
            <form onSubmit={handleSubmit} className={css.contactForm}>

                <span className={css.searchBar}>
                    <input name="name" placeholder='Name' />
                    <input name="number" placeholder='Number' />
                </span>
                <button type="submit" className={css.searchButton}  >
                    Add contact
                </button>
            </form>

            <form className={css.contactForm}>
                <input type="text" onChange={(e) => { dispatch(sortListItems(e.target.value)) }} placeholder='Search' />
            </form>

        </div>
    );
};
