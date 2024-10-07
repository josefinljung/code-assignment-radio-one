import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heading } from '../../components';
import Episode from './partials/Episode';
import ArrowBackIcon from '../Icons/ArrowBackIcon';
import { Episode as EpisodeType, EpisodesResponse } from '../../types/global';

// todo: Add "No results found" if user searches for something that doesn't exist
// todo: Add label to input for screen readers. How to make screen readers
//       aware of results being rendered beneath input?

function Episodes() {
  const { programId } = useParams<{ programId: string }>();
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [error, setError] = useState('');
  const [filteredEpisodes, setFilteredEpisodes] = useState<EpisodeType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
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
          `https://api.sr.se/api/v2/episodes/index?format=json&programid=${programId}`
        );
        const data: EpisodesResponse = await response.json();
        setEpisodes(data.episodes);
        setFilteredEpisodes(data.episodes);
        setIsLoading(false);
        setShowLoading(false);
        clearTimeout(delayLoading);
      } catch (error) {
        setError('Failed to load episodes.');
        setIsLoading(false);
        setShowLoading(false);
        clearTimeout(delayLoading);
      }
    };

    fetchData();

    return () => clearTimeout(delayLoading);
  }, [programId]);

  // convert date string to timestamp to match episode.publishdateutc format
  const extractTimestamp = (dateString: string) => {
    return parseInt(dateString.replace('/Date(', '').replace(')/', ''), 10);
  };

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    filterEpisodes(value);
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      filterEpisodes(searchValue);
    }
  };

  const filterEpisodes = (value: string) => {
    if (!value) {
      setFilteredEpisodes(episodes);
      return;
    }

    const isDate = /^\d{4}(-\d{2})?(-\d{2})?$/.test(value);
    const filtered = isDate ? filterByDate(value) : filterByTitle(value);
    setFilteredEpisodes(filtered);
  };

  const filterByDate = (value: string) => {
    const inputDate = new Date(value).getTime();
    return episodes
      .filter(
        (episode) => extractTimestamp(episode.publishdateutc) >= inputDate
      )
      .sort(
        (a, b) =>
          extractTimestamp(a.publishdateutc) -
          extractTimestamp(b.publishdateutc)
      );
  };

  const filterByTitle = (value: string) => {
    return episodes
      .filter((episode) =>
        episode.title.toLowerCase().includes(value.toLowerCase())
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  };

  return (
    <div className="grid gap-y-8 pb-10 pt-4 md:px-14 px-8 max-w-screen-lg mx-auto">
      <div className="grid gap-2">
        <Link
          to="/channel"
          className="hover:underline text-md flex gap-2 text-light-blue items-center -my-2 py-2 w-fit"
        >
          <ArrowBackIcon />
          Back
        </Link>

        <Heading heading="Episodes" size="sm" />
      </div>

      <div className="grid gap-3 mt-2">
        <p className="text-dark-pink font-semibold">Filter</p>
        <form>
          <input
            placeholder="Enter a key word or date"
            className="w-full bg-dark-gray-blue text-light-blue py-2 px-1.5 text-sm rounded-md border-light-blue border"
            type="text"
            value={searchValue}
            onChange={onInputValueChange}
            onKeyDown={onInputKeyDown}
          />
        </form>
      </div>
      <div>
        {isLoading && showLoading ? (
          <p className="text-common-white">Loading...</p>
        ) : error ? (
          <p className="text-common-white">{error}</p>
        ) : (
          <ul className="grid divide-y divide-light-blue/20">
            {filteredEpisodes.map((episode) => {
              return (
                <li className="py-3" key={episode.id}>
                  <Episode episode={episode} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Episodes;
