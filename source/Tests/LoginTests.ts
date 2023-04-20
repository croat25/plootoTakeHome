import { testingUrl } from '../../appsettings.json';
import { Selector, fixture } from 'testcafe';
import { login } from '../../CompositeFolder/ReusableComponents/LoginMethods';
import { dashboardPlootoSelector } from '../../CompositeFolder/Selectors/UserSelectors';
fixture `Login Tests`
    .page(testingUrl).beforeEach(async t => {
        // Resize window
        await t.resizeWindow(1280,800);
        });

test('fill in email and password then complete sign in', async t => {
    // Arrange
    // Act
    await login();

    // Assert
    await t.expect(dashboardPlootoSelector.exists).eql(true);
});

test.skip('not filling in the email and password phase should fail the sign in', async t => {
    // Arrange
    // Act
    await t.click(Selector('span').withText('Sign In'));

    // Assert
    .expect(dashboardPlootoSelector.exists).eql(false);
});