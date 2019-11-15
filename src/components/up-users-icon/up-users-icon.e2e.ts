import { newE2EPage } from '@stencil/core/testing';

describe('up-users-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<up-users-icon></up-users-icon>');

    const element = await page.find('up-users-icon');
    expect(element).toHaveClass('hydrated');
  });
});
