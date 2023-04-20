import { login } from '../../CompositeFolder/ReusableComponents/LoginMethods';
import { dashboardNavigation } from '../../CompositeFolder/ReusableComponents/DashboardMethods';
import { testingUrl } from '../../appsettings.json';
import { fixture } from 'testcafe';
import { cardSelector, gridRowPaymentApprovals, listApprovedPaymentSelector, testingCategoryHeaderSelector, testingCategoryListSelector } from '../../CompositeFolder/Selectors/UserSelectors';
import { testingCategory } from '../../CompositeFolder/Helpers/enumVariables';

fixture `Payment Approvals Tests`
    .page(testingUrl).beforeEach(async t => {
        // Resize window
        await t.resizeWindow(1280,800);
        });

test('should login, find plooto Inc, assert payment Approvals page loads', async t => {
    // Arrange
    await login();
    await dashboardNavigation();

    // Act
    await t.click(listApprovedPaymentSelector)

    // Assert
    .expect((await cardSelector(testingCategory.approvedPayments)).exists).eql(true)
    .expect((await testingCategoryHeaderSelector(testingCategory.approvedPayments)).textContent).contains('Payment approvals')
    .expect((await testingCategoryListSelector(testingCategory.approvedPayments)).textContent).contains('Payments Awaiting My Approval')
    .expect(gridRowPaymentApprovals.count).gt(0);
});
