import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Channel from './components/Channel/Channel';
import NotFound from './components/NotFound/NotFound';
import { ChannelResponse } from './types/global';
import Episodes from './components/Episodes/Episodes';

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
                <Channel data={channelData} />
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
