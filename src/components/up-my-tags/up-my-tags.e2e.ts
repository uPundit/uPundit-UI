import { newE2EPage } from '@stencil/core/testing';

describe('up-my-tags', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<up-my-tags></up-my-tags>');

    const element = await page.find('up-my-tags');
    expect(element).toHaveClass('hydrated');
  });
});
