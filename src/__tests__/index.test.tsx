import React from 'react';
import { render } from '@testing-library/react';
import HomePage, { getServerSideProps, HomePageProps } from '../pages/index';

const setupProps = async (): Promise<HomePageProps> => {
  const response = await getServerSideProps();
  if ('redirect' in response || 'notFound' in response) {
    throw new Error('Not supported');
  }
  return response.props;
};

const setup = async () => {
  const props = await setupProps();
  return render(<HomePage {...props} />);
};

describe('homePage', () => {
  describe('getServerSideProps', () => {
    it('should return props from a valid rawToken', async () => {
      expect.assertions(1);

      const props = await setupProps();
      expect(props).toStrictEqual({ hello: 'world' });
    });
  });

  describe('<HomePage />', () => {
    it('should render with a correct rawToken', async () => {
      expect.assertions(1);

      const { container } = await setup();
      expect(container).toMatchInlineSnapshot(`
        .c0 {
          color: hotpink;
          font-size: 3rem;
        }

        <div>
          <div>
            <h1
              class="c0"
            >
              Next.js Template
            </h1>
            <div>
              Hello
              world
            </div>
          </div>
        </div>
      `);
    });
  });
});
