import { Episode as EpisodeType } from '../../../../types/global';

function Episode({ ...episode }: EpisodeType) {
  return <div className="text-white">{episode.title}</div>;
}

export default Episode;
