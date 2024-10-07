import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Heading/Heading';
import ArrowBackIcon from '../Icons/ArrowBackIcon';
import Program from './partials/Program';
import { ProgramsResponse } from '../../types/global';

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
        <Link
          className="hover:underline text-md w-fit text-md flex gap-2 text-light-blue items-center -my-2 py-2"
          to="/"
        >
          <ArrowBackIcon />
          Back
        </Link>

        <Heading heading="Programs" size="sm" />
      </div>

      {isLoading && showLoading ? (
        <p className="text-common-white">Loading...</p>
      ) : error ? (
        <p className="text-common-white">{error}</p>
      ) : (
        <ul className="grid divide-y divide-light-blue/20">
          {programs?.programs.map((program) => {
            return (
              <li className="py-3" key={program.id}>
                <Program program={program} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Programs;
