import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Episodes, Header, Home, NotFound, Programs } from './components';
import { ChannelResponse } from './types/global';

function App() {
  const [channelData, setChannelData] = useState<ChannelResponse>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const delayLoading = setTimeout(() => {
      setShowLoading(true);
    }, 300);

    setIsLoading(true);
    setError('');

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.sr.se/api/v2/channels/132?format=json'
        );
        const data: ChannelResponse = await response.json();
        setChannelData(data);
        setIsLoading(false);
        setShowLoading(false);
        clearTimeout(delayLoading);
      } catch (error) {
        setError('No channel could be found.');
        setIsLoading(false);
        setShowLoading(false);
        clearTimeout(delayLoading);
      }
    };

    fetchData();

    return () => clearTimeout(delayLoading);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/channel"
          element={
            isLoading && showLoading ? (
              <p className="text-common-white">Loading...</p>
            ) : error ? (
              <p className="text-common-white">{error}</p>
            ) : channelData ? (
              <>
                <Header channel={channelData.channel} />
                <Programs channelId={channelData.channel.id} />
              </>
            ) : null
          }
        />
        <Route
          path="/channel/episodes/:programId"
          element={
            isLoading && showLoading ? (
              <p className="text-common-white">Loading...</p>
            ) : error ? (
              <p className="text-common-white">{error}</p>
            ) : channelData ? (
              <>
                <Header channel={channelData.channel} />
                <Episodes />
              </>
            ) : null
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
