import { useQuery } from '@apollo/client';
import { Button, Layout, Space, Typography } from 'antd';
import { useState } from 'react';
import { ProjectAsphaltLots } from './query';

export default function App() {
  const [showData, setShowData] = useState(false);
  const PRICE_PRACTICE_PROJECT = 'DA8C588C-A7DA-41F1-AD59-602363787D48';
  const { data } = useQuery(ProjectAsphaltLots, {
    variables: { globalId: PRICE_PRACTICE_PROJECT },
  });

  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>
        <h1>Organize this Data</h1>
        <Button onClick={() => setShowData(prev => !prev)}>Show Data</Button>

        {showData && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </Layout.Content>
    </Layout>
  );
}
