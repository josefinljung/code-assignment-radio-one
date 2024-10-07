import { Link } from 'react-router-dom';
import { Program as ProgramType } from '~/types/global';

interface ProgramProps {
  program: ProgramType;
}

function Program({ program }: ProgramProps) {
  return (
    <Link
      className="flex gap-4 items-start group"
      to={`/channel/episodes/${program.id}`}
    >
      <img
        src={program.programimage}
        className="h-[80px] w-fit"
        role="presentation"
        alt="Program logo"
      />
      <div>
        <h2
          className="text-common-white break-words text-lg font-semibold group-hover:underline"
          style={{ wordBreak: 'break-word' }}
        >
          {program.name}
        </h2>
        <p
          style={{ wordBreak: 'break-word' }}
          className="text-light-blue text-xs"
        >
          {program.description}
        </p>
      </div>
    </Link>
  );
}

export default Program;
