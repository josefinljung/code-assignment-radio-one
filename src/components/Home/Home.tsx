import { Link } from 'react-router-dom';
import { Heading, PlayIcon } from '../../components';

function Home() {
  return (
    <div className="flex h-screen justify-center items-center px-8">
      <div className="grid gap-8 md:gap-6 justify-items-center">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="p-4 bg-dark-pink rounded-full w-fit">
            <PlayIcon />
          </div>
          <Heading heading="Radio app" size="lg" />
        </div>
        <Link
          to="/channel"
          className="ease-in-out duration-100 hover:scale-105 transform-scale shadow-[0_0px_700px_-5px_rgba(130,0,255)] bg-gradient-to-r from-dark-pink to-dark-purple rounded-xl text-common-white text-xl md:text-xs font-semibold w-max py-4 md:px-6 px-7 h-fit"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Home;
