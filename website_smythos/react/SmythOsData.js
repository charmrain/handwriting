import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SmythOSData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'API_ENDPOINT' with the actual SmythOS API URL
    axios.get('https://clxw85cdr0g6c3dpo1rhoep5p.agent.a.smyth.ai')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>SmythOS Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SmythOSData;