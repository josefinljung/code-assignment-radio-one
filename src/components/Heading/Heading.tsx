interface HeadingProps {
  heading: string;
}

function Heading({ heading }: HeadingProps) {
  return (
    <h1 className="text-bubblegum-pink text-lg font-semibold">{heading}</h1>
  );
}

export default Heading;
