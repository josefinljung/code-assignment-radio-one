import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Episode as EpisodeType } from '../../../types/global';
import Episode from './partials/Episode';

function Episodes() {
  const { programId } = useParams<{ programId: string }>();
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);

  // todo: add filter
  useEffect(() => {
    fetch(
      `https://api.sr.se/api/v2/episodes/index?format=json&programid=${programId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.episodes);
      });
  }, [programId]);

  return (
    <div>
      <a href="/channel" className="text-white">
        Back
      </a>
      <p className="text-pink-300 text-xl">Episodes</p>
      {episodes.map((episode) => (
        <div>
          <Episode {...episode} />
        </div>
      ))}
    </div>
  );
}

export default Episodes;
