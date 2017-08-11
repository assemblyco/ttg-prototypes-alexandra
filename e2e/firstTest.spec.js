describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have initial screen with app title', async () => {
    await expect(element(by.id('appTitle'))).toBeVisible();
  });
  
  it('should show app title after tap', async () => {
    await element(by.id('submitEmailButton')).tap();
    //withTimeout is a hack to get around await not functioning correctly.
    await waitFor(element(by.label('appTitle'))).toBeVisible().withTimeout(0);
  });
  
  it('should show password input after tap', async () => {
    await element(by.id('submitEmailButton')).tap();
    //withTimeout is a hack to get around await not functioning correctly.
    await waitFor(element(by.label('submitPasswordInput'))).toBeVisible().withTimeout(0);
  });
});