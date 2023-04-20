import { login } from '../../CompositeFolder/ReusableComponents/LoginMethods';
import { dashboardNavigation } from '../../CompositeFolder/ReusableComponents/DashboardMethods';
import { testingUrl } from '../../appsettings.json';
import { fixture } from 'testcafe';
import { plootoHeaderSelector } from '../../CompositeFolder/Selectors/UserSelectors';

fixture `Login Tests`
    .page(testingUrl).beforeEach(async t => {
        // Resize window
        await t.resizeWindow(1280,800);
        });

test('login, and successfully select into Plooto Inc', async t => {
    // Arrange
    await login();

    // Act
    await dashboardNavigation();

    // Assert
    await t.expect(plootoHeaderSelector.exists).eql(true);
});
