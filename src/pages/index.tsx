import { Container, Typography } from '@material-ui/core';
import { GetServerSidePropsResult } from 'next';
import React from 'react';

export interface HomePageProps {
  hello: string;
}

const HomePage: React.FC<HomePageProps> = ({ hello }) => (
  <Container maxWidth='lg'>
    <Typography variant='h3' color='primary'>
      Next.js Template
    </Typography>
    <div>Next.js + Material UI + Typescript</div>
    <div>Hello {hello}</div>
  </Container>
);

export const getServerSideProps =
  (): GetServerSidePropsResult<HomePageProps> => {
    return {
      props: {
        hello: 'world',
      },
    };
  };

export default HomePage;
