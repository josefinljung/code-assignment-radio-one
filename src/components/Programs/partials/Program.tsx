import { Program as ProgramType } from '../../../../types/global';

function Program({ ...program }: ProgramType) {
  return (
    <a
      className="grid grid-cols-[80px,1fr] gap-4 items-start border-b border-light-blue/20 py-2"
      href={`/channel/episodes/${program.id}`}
    >
      <img
        src={program.programimage}
        className="w-[80px] h-fit"
        role="presentation"
        alt="Program logo"
      />
      <div>
        <h2 className="text-common-white text-lg">{program.name}</h2>
        <p className="text-light-blue text-xs">{program.description}</p>
      </div>
    </a>
  );
}

export default Program;
