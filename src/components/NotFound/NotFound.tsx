function NotFound() {
  return (
    <div className="grid items-center align-center h-screen">
      <div className="text-center">
        <h1 className="text-bubblegum-pink text-xl">404 - Page not found</h1>
        <a className="text-common-white hover:underline" href="/">
          Go back to home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
