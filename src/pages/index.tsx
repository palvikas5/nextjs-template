import { GetServerSidePropsResult } from 'next';
import React from 'react';
import { Heading } from '../styles/index.style';

interface HomePageProps {
  hello: string;
}

const HomePage = ({ hello }: HomePageProps) => {
  return (
    <div>
      <Heading>Next.js Template</Heading>
      <div>
        Hello
        {hello}
      </div>
    </div>
  );
};

const getServerSideProps = (): GetServerSidePropsResult<HomePageProps> => {
  return {
    props: {
      hello: 'world',
    },
  };
};

export type { HomePageProps };
export { getServerSideProps };
export default HomePage;
