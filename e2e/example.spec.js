describe('Example', () => {
  beforeEach(async () => {
    // console.log('ABCXYZ');
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.label('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.label('World!!!'))).toBeVisible();
  });

  it('login success', async () => {
    await element(by.id('text_input')).typeText('123456');
    await element(by.label('Login')).tap();
    await expect(element(by.label('SUCCESS'))).toBeVisible();
  });

  it('login fail', async () => {
    await element(by.id('text_input')).tap();
    await element(by.id('text_input')).typeText('1234');
    await element(by.label('Login')).tap();
    await expect(element(by.label('Login Test!!!'))).toBeVisible();
  });

});