import { Episode as EpisodeType } from '../../../types/global';

function Episode({ ...episode }: EpisodeType) {
  return (
    <div className="grid md:grid-cols-[100px,1fr] gap-4 items-start">
      <img
        src={episode.imageurl}
        alt="Episode cover"
        className="max-w-[100px] h-[100px]"
      />
      <div>
        <h2 className="text-common-white text-xl font-semibold">
          {episode.title}
        </h2>
        <p className="text-light-blue text-sm">{episode.description}</p>
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
