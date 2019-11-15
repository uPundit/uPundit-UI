import { newE2EPage } from '@stencil/core/testing';

describe('up-others-tags', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<up-others-tags></up-others-tags>');

    const element = await page.find('up-others-tags');
    expect(element).toHaveClass('hydrated');
  });
});
