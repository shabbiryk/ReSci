import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';
import { JssProvider } from 'react-jss';

const jssProviderId = { minify: true };

const Home = React.memo(() => {
  const { connectUser, provider } = useContext(DashboardContext);
  return (
    <JssProvider id={jssProviderId}>
      <Layout>
        <Dashboard />
      </Layout>
    </JssProvider>
  );
});

export default Home;
