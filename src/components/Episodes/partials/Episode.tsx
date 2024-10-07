import { Episode as EpisodeType } from '../../../types/global';

interface EpisodeProps {
  episode: EpisodeType;
}

// Question: In README it says to render either a episode.listenpodfile or episode.broadcast.broadcastfiles.
// No episode has episode.broadcast.broadcastfiles.
// And if they did, that would be an array. What would that UI look like?

function Episode({ episode }: EpisodeProps) {
  return (
    <div className="grid md:grid-cols-[80px,1fr] gap-4 items-start">
      <img
        src={episode.imageurl}
        alt="Episode cover"
        className="h-[80px] w-fit"
      />
      <div>
        <h2 className="text-common-white text-lg font-semibold">
          {episode.title}
        </h2>
        <p className="text-light-blue text-xs">{episode.description}</p>
        {episode.listenpodfile && (
          <audio
            controls
            className="mt-4 w-full"
            src={episode.listenpodfile.url}
          />
        )}
      </div>
    </div>
  );
}

export default Episode;
