import { newE2EPage } from '@stencil/core/testing';

describe('up-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<up-logo></up-logo>');
    const element = await page.find('up-logo');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<up-logo></up-logo>');
    const component = await page.find('up-logo');
    const element = await page.find('up-logo >>> div');
    
    component.setProperty('height', '3em');
    await page.waitForChanges();
    
  });
});
