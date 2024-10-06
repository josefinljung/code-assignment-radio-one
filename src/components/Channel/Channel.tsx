import Programs from '../Programs/Programs';
import { ChannelResponse } from '../../../types/global';

interface ChannelProps {
  data: ChannelResponse;
}

function Channel({ data }: ChannelProps) {
  return (
    <div className="py-8 md:px-14 px-8 max-w-screen-lg mx-auto">
      <a className="text-light-blue hover:underline" href="/">
        Back
      </a>

      <Programs channelId={data.channel.id} />
    </div>
  );
}

export default Channel;
