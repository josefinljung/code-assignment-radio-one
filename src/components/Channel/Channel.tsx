import Programs from '../Programs/Programs';
import { ChannelResponse } from '../../../types/global';

interface ChannelProps {
  data: ChannelResponse;
}

function Channel({ data }: ChannelProps) {
  return (
    <div>
      <p>channel logo</p>
      <p>info text about channel</p>
      <p>button to /home</p>

      <Programs channelId={data.channel.id} />
    </div>
  );
}

export default Channel;
