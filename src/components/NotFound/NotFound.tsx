import { Link } from 'react-router-dom';
import Heading from './../Heading/Heading';

function NotFound() {
  return (
    <div className="grid items-center align-center h-screen">
      <div className="text-center">
        <Heading heading="404 - Page not found" />
        <Link className="text-common-white hover:underline" to="/">
          Go back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
