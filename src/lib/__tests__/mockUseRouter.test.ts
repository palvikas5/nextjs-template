import { useRouter } from 'next/router';
import { mockUseRouter } from '../mockUseRouter';

describe('mock use router', () => {
  it('should trigger router.push function', () => {
    expect.assertions(1);

    const push = jest.fn();

    mockUseRouter({
      push,
    });

    const router = useRouter();
    router.push('/some-route');

    expect(push).toHaveBeenCalledWith('/some-route');
  });
});
