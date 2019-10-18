import { newE2EPage } from '@stencil/core/testing';

describe('up-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<up-icon></up-icon>');
    const element = await page.find('up-icon');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<up-icon></up-icon>');
    const component = await page.find('up-icon');
    const element = await page.find('up-icon >>> div');
    
    component.setProperty('height', '3em');
    await page.waitForChanges();
    
  });
});
