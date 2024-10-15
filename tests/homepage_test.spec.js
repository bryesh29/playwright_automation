import { test, expect } from '@playwright/test';

test('Header navigation links', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('link', { name: 'Atradius Logo' }).click();
  await page.getByRole('link', { name: 'Business', exact: true }).click();
  await page.getByRole('link', { name: 'Developers' }).click();
  await page.getByRole('link', { name: 'API Store' }).click();
  await page.getByRole('link', { name: 'About Us' }).click();
});

test('Header log in link', async ({ page }) => {
  await page.goto('https://api.atradius.com/', {timeout: 60000});
  await page.getByRole('link', { name: 'Log In' }).click({timeout: 60000});
});

test('Header get started link', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('link', { name: 'Get Started' }).click();
});

test('Banner', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('heading', { name: 'Boost your business with' }).click();
  await page.getByRole('heading', { name: 'Optimise your credit' }).click();
  await page.locator('section').filter({ hasText: 'BusinessDevelopersAPI' }).getByRole('button').click()
});

test('Teaser1', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('img', { name: 'Save time and effort image' }).click();
  await page.getByRole('heading', { name: 'Save time and effort' }).click();
  await page.getByText('View our up-to-date').click();
  await page.getByRole('button', { name: 'View more' }).first().click();
});

test('Teaser2', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('img', { name: 'Developer-friendly APIs image' }).click();
  await page.getByRole('heading', { name: 'Developer-friendly APIs', exact: true }).click();
  await page.getByText('Our simple documentation').click();
  await page.getByRole('button', { name: 'View more' }).nth(1).click();

});

test('Teaser3', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('img', { name: 'Visit our API store image' }).click();
  await page.getByRole('heading', { name: 'Visit our API store' }).click();
  await page.getByText('See how our range of APIs').click();
  await page.getByRole('button', { name: 'View more' }).nth(2).click();
});

test('Feature grid1', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('link', { name: 'Fast Get quick access to data' }).click();

});
test('Feature grid2', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('link', { name: 'Flexible Optimise your own' }).click();

});

test('Feature grid3', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('link', { name: 'Easy Rich business' }).click();

});
test('Feature grid4', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('link', { name: 'Consistent The API design' }).click();

});
test('Feature grid5', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('link', { name: 'Well documented APIs The APIs' }).click();
});

test('FAQs', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('heading', { name: 'What are APIs? +' }).click();
  await page.getByRole('heading', { name: 'What can I do with the' }).click();
  await page.getByRole('heading', { name: 'What are the benefits of' }).click();
  await page.getByRole('heading', { name: 'Who can have access to the' }).click();
  await page.getByRole('heading', { name: 'How can I start using' }).click();
  await page.getByRole('heading', { name: 'What do I need to start using' }).click();
  await page.getByRole('heading', { name: 'What steps do I need to take' }).click();
  await page.getByRole('heading', { name: 'Can Atradius APIs be used' }).click();
  await page.getByRole('heading', { name: 'How can I learn more about' }).click();
});

test('Freemium', async ({ page }) => {
  await page.goto('https://api.atradius.com/');
  await page.getByRole('heading', { name: 'Start now!' }).click();
  await page.getByText('See how easy it is to').click();
  await page.locator('section').filter({ hasText: 'Start now!See how easy it is' }).getByRole('button').click();
});

test('Footer', async ({ page }) => {
  await page.goto('https://api.atradius.com/', {timeout: 60000});
  await page.getByRole('link', { name: 'Atradius Twitter' }).click({timeout: 60000});
  await page.getByRole('link', { name: 'Atradius Linkedin' }).click({timeout: 60000});
  await page.getByRole('link', { name: 'Atradius Youtube' }).click({timeout: 60000});
  await page.getByRole('link', { name: 'GDPR' }).click();
  await page.getByRole('link', { name: 'Privacy Statement' }).click();
  await page.getByRole('link', { name: 'Cookie Information' }).click();
  await page.getByRole('link', { name: 'Phishing & Security' }).click();
  await page.getByRole('link', { name: 'Legal Notice' }).click();
  await page.getByRole('link', { name: 'Supplier Information' }).click();
  await page.getByRole('link', { name: 'Customer Service Charter' }).click({timeout: 60000});
  await page.getByRole('link', { name: 'Disclaimer' }).click();
  await page.getByText('© Atradius N.V. 2004 - 2024').click({timeout: 60000});


});

