function PlayIcon() {
  return (
    <svg
      fill="none"
      role="presentation"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="md:size-6 size-8 text-dark-pink"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        className="text-light-pink"
        fill="currentColor"
      />
      <path
        className="text-dark-pink"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
      />
    </svg>
  );
}

export default PlayIcon;
