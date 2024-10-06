import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './components/Home/Home';
import Channel from './components/Channel/Channel';
import { ChannelResponse } from '.././types/global';
import Episodes from './components/Episodes/Episodes';

function App() {
  const [channelData, setChannelData] = useState<ChannelResponse>();

  useEffect(() => {
    fetch('https://api.sr.se/api/v2/channels/132?format=json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setChannelData(data);
      });
  }, []);

  // is fetching data div necessary
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/channel"
          element={
            channelData ? (
              <Channel data={channelData} />
            ) : (
              <div>Fetching data...</div>
            )
          }
        />
        <Route path="/channel/episodes/:programId" element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
