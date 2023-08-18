import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //
import { ContactEditor } from '../components/ContactsEditor/ContactEditor';
import { ContactList } from '../components/ContactsList/ContactsList';
import { fetchTasks } from '../redux/tasks/operations';
import { selectLoading, sortedTasks, selectAllTasks } from '../redux/tasks/selectors';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const tasks = useSelector(selectAllTasks);
    const sorted = useSelector(sortedTasks);

    return (
        <>
            <ContactEditor />
            <ContactList contacts={sorted.length ? sorted : tasks} />
            <div>{isLoading && 'Request in progress...'}</div>
        </>
    );
}