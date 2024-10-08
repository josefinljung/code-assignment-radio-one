import { Channel } from '~/types/global';

interface HeaderProps {
  channel: Channel;
}

function Header({ channel }: HeaderProps) {
  return (
    <div className="grid gap-8 justify-items-center md:flex justify-center items-center max-md:text-center py-8 md:px-14 px-8 max-w-screen-lg mx-auto">
      <img
        className="max-md:h-[calc(100vw/4)] min-h-[50px] max-h-[100px] h-[100px] w-fit"
        src={channel.image}
        alt=""
      />
      <p className="text-light-blue">{channel.tagline}</p>
    </div>
  );
}

export default Header;
