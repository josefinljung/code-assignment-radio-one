import { useEffect, useState } from 'react';
import Program from './partials/Program';
import { ProgramsResponse } from '../../../types/global';

interface ProgramsType {
  channelId: number;
}

function Programs({ channelId }: ProgramsType) {
  const [programs, setPrograms] = useState<ProgramsResponse>();
  useEffect(() => {
    fetch(
      `https://api.sr.se/api/v2/programs/index?format=json&filter=program.haspod&filtervalue=true&channelid=${channelId}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPrograms(data);
      });
  }, [channelId]);

  return (
    <div>
      <h1 className="text-pink-300 text-lg">PROGRAMS</h1>

      <div className="grid gap-2">
        {programs?.programs.map((program) => {
          return (
            <a href={`/channel/episodes/${program.id}`}>
              <Program {...program} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Programs;
