import { ChannelResponse } from '../../types/global';

interface ChannelProps {
  data: ChannelResponse;
}

function Header({ data }: ChannelProps) {
  return (
    <div className="grid gap-8 justify-items-center md:flex justify-center max-md:text-center py-8 md:px-14 px-8 max-w-screen-lg mx-auto">
      <img
        className="max-md:h-[calc(100vw/4)] min-h-[50px] max-h-[100px] h-[50px] w-fit"
        src={data.channel.image}
        alt={`${data.channel.name} logo`}
      />
      <p className="text-light-blue">{data.channel.tagline}</p>
    </div>
  );
}

export default Header;
