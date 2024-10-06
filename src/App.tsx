import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
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

  // todo: add 404 page
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/channel"
          element={
            channelData ? (
              <>
                <Header data={channelData} />
                <Channel data={channelData} />
              </>
            ) : (
              <div>Fetching data...</div>
            )
          }
        />
        <Route
          path="/channel/episodes/:programId"
          element={
            <>
              {channelData ? <Header data={channelData} /> : null}
              <Episodes />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
