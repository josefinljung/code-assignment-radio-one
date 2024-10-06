import Heading from './../Heading/Heading';

function NotFound() {
  return (
    <div className="grid items-center align-center h-screen">
      <div className="text-center">
        <Heading heading="404 - Page not found" />
        <a className="text-common-white hover:underline" href="/">
          Go back to home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
