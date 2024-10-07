import { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';
import Program from './partials/Program';
import { ProgramsResponse } from '../../types/global';

import ArrowBackIcon from '../Icons/ArrowBackIcon';

interface ProgramsType {
  channelId: number;
}

function Programs({ channelId }: ProgramsType) {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [programs, setPrograms] = useState<ProgramsResponse>();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const delayLoading = setTimeout(() => {
      setShowLoading(true);
    }, 300);

    setIsLoading(true);
    setError('');

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.sr.se/api/v2/programs/index?format=json&filter=program.haspod&filtervalue=true&channelid=${channelId}`
        );
        const data: ProgramsResponse = await response.json();
        setPrograms(data);
        setIsLoading(false);
        setShowLoading(false);
        clearTimeout(delayLoading);
      } catch (error) {
        setError('Failed to load programs.');
        setIsLoading(false);
        setShowLoading(false);
        clearTimeout(delayLoading);
      }
    };

    fetchData();

    return () => clearTimeout(delayLoading);
  }, [channelId]);

  return (
    <div className="grid gap-y-8 pt-4 pb-10 md:px-14 px-8 max-w-screen-lg mx-auto">
      <div className="grid gap-2">
        <div className="flex gap-2 text-light-blue items-center">
          <ArrowBackIcon />
          <a className="hover:underline text-md w-fit -m-2 p-2" href="/">
            Back
          </a>
        </div>

        <Heading heading="Programs" size="sm" />
      </div>

      {isLoading && showLoading ? (
        <p className="text-common-white">Loading...</p>
      ) : error ? (
        <p className="text-common-white">{error}</p>
      ) : (
        <div className="grid divide-y divide-light-blue/20">
          {programs?.programs.map((program) => {
            return (
              <div className="py-3" key={program.id}>
                <Program program={program} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Programs;
