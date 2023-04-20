import { login } from '../../CompositeFolder/ReusableComponents/LoginMethods';
import { dashboardNavigation } from '../../CompositeFolder/ReusableComponents/DashboardMethods';
import { testingUrl } from '../../appsettings.json';
import { fixture } from "testcafe";
import { dashboardListSelector } from '../../CompositeFolder/Selectors/UserSelectors';
import { testingCategory } from '../../CompositeFolder/Helpers/enumVariables';

fixture `Dashboard Tests`
    .page(testingUrl).beforeEach(async t => {
        // Resize window
        await t.resizeWindow(1280,800);
        });

test('login, find plooto Inc in dashboard and ensure it loads', async t => {
    // Arrange
    await login();

    // Act
    await dashboardNavigation();

    // Assert
    await t.expect((await dashboardListSelector(testingCategory.setupPayments)).exists).eql(true)
    .expect((await dashboardListSelector(testingCategory.approvedPayments)).exists).eql(true)
    .expect((await dashboardListSelector(testingCategory.pendingPayments)).exists).eql(true)
    .expect((await dashboardListSelector(testingCategory.completedPayments)).exists).eql(true)
    .expect((await dashboardListSelector(testingCategory.fxCalculator)).exists).eql(true);
});
