import { useEffect, useState } from 'react';
import Program from './partials/Program';
import { ProgramsResponse } from '../../../types/global';

interface ProgramsType {
  channelId: number;
}

function Programs({ channelId }: ProgramsType) {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [programs, setPrograms] = useState<ProgramsResponse>();

  useEffect(() => {
    setIsLoading(true);
    setError('');
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.sr.se/api/v2/programs/index?format=json&filter=program.haspod&filtervalue=true&channelid=${channelId}`
        );
        if (!response.ok) {
          throw new Error('No programs could be found.');
        }
        const data = await response.json();
        setPrograms(data);

        setIsLoading(false);
      } catch (error) {
        setError('Results could not be found');
        setIsLoading(false);
      }
    };
    fetchData();
  }, [channelId]);

  return (
    <div>
      <h1 className="text-pink-300 text-lg">PROGRAMS</h1>

      {isLoading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-white">{error}</p>
      ) : (
        <div className="grid gap-2">
          {programs?.programs.map((program) => {
            return (
              <a href={`/channel/episodes/${program.id}`} key={program.id}>
                <Program {...program} />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Programs;
