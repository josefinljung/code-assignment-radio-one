import Heading from '../Heading/Heading';

function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="grid space-y-4">
        <Heading heading="Radio app" />
        <a
          href="/channel"
          className="border-2 text-common-white text-xl border-red-600 w-max p-6 h-fit"
        >
          Get started
        </a>
      </div>
    </div>
  );
}

export default Home;
