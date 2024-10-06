import { Program as ProgramType } from '../../../../types/global';

function Program({ ...program }: ProgramType) {
  return (
    <div>
      <p>logo of program</p>
      <p className="text-white">{program.name}</p>
      <p>program description</p>
    </div>
  );
}

export default Program;
