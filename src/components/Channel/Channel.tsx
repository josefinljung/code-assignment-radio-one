import Programs from '../Programs/Programs';
import { ChannelResponse } from '../../../types/global';

interface ChannelProps {
  data: ChannelResponse;
}

// is this component redundant?

function Channel({ data }: ChannelProps) {
  return <Programs channelId={data.channel.id} />;
}

export default Channel;
