import classNames from 'classnames';

interface HeadingProps {
  heading: string;
  size?: 'sm' | 'lg';
}

function Heading({ heading, size }: HeadingProps) {
  return (
    <h1
      className={classNames('text-light-pink text- font-semibold', {
        'text-3xl': size === 'sm',
        'md:text-5xl text-6xl': size === 'lg',
      })}
    >
      {heading}
    </h1>
  );
}

export default Heading;
