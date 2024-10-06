import { ChannelResponse } from '../../../types/global';

interface ChannelProps {
  data: ChannelResponse;
}
function Header({ data }: ChannelProps) {
  return (
    <div className="text-white grid gap-4 justify-items-center md:flex justify-center max-md:text-center py-8 md:px-14 px-8 max-w-screen-lg mx-auto">
      <img
        className="max-md:w-[calc(100vw/4)] min-w-[50px] max-w-[100px]"
        src={data.channel.image}
        alt="Channel logo"
      />
      <p className="text-white">{data.channel.tagline}</p>
    </div>
  );
}

export default Header;
