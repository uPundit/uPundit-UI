import { newE2EPage } from '@stencil/core/testing';

describe('up-stars', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<up-stars></up-stars>');

    const element = await page.find('up-stars');
    expect(element).toHaveClass('hydrated');
  });
});
