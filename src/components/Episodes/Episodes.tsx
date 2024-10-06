import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Episode as EpisodeType } from '../../../types/global';
import Episode from './partials/Episode';

function Episodes() {
  const { programId } = useParams<{ programId: string }>();
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState<EpisodeType[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    setIsLoading(true);
    setError('');
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.sr.se/api/v2/episodes/index?format=json&programid=${programId}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEpisodes(data.episodes);
        setFilteredEpisodes(data.episodes);

        // add loading state for 800ms
        await delay(800);
        setIsLoading(false);
      } catch (error) {
        setError('Results could not be found');
        setIsLoading(false);
      }
    };
    fetchData();
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
    <div className="grid gap-y-4">
      <a href="/channel" className="text-white">
        Back
      </a>

      <p className="text-pink-600">filter</p>
      <form>
        <input
          type="text"
          value={searchValue}
          onChange={onInputValueChange}
          onKeyDown={onInputKeyDown}
        />
      </form>
      <div>
        <p className="text-pink-300 text-xl my-2">Episodes</p>
        {isLoading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-white">{error}</p>
        ) : (
          <>
            {filteredEpisodes.map((episode) => {
              return (
                <div key={episode.id}>
                  <Episode {...episode} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Episodes;
