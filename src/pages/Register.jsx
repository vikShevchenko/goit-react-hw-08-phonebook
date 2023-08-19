import { useSelector } from 'react-redux'; //
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { loadTesting } from '../redux/auth/selectors';

export default function Register() {


    const isLoading = useSelector(loadTesting);

    return (
        <div>
            <RegisterForm />
            <div>{isLoading && 'Wait for the server to respond... Possible infinity. '}</div>

        </div>
    );
}

