import React, { useEffect, useState } from 'react';
import InnovatorsMapTz from './InnovatorsMapTz';

import Header from './components/Header';
import InnovatorList from './components/InnovatorList';

const innovatorsMap = new InnovatorsMapTz({
  apiKey: "5fb1e0fc0d026d6e341c45ffb0819df265da723af1e5e2d461c7dfda"
});

function App() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchInnovators();
  }, []);

  async function fetchInnovators(page = 1) {
    setLoading(true);
    const { data, ...pagination } = await innovatorsMap.getInnovators({
      page
    });

    setData(data);
    setLoading(false);
  }

  return (
    <div class="mt-8 mx-auto max-w-5xl">
      <Header />
      <InnovatorList loading={isLoading} data={data} />
    </div>
  );
}

export default App;
