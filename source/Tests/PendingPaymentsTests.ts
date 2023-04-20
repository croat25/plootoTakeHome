import { login } from '../../CompositeFolder/ReusableComponents/LoginMethods';
import { dashboardNavigation } from '../../CompositeFolder/ReusableComponents/DashboardMethods';
import { testingUrl } from '../../appsettings.json';
import { fixture } from 'testcafe';
import { aTagSelector, buttonSelector, cardSelector, detailHeaderSelector, firstDetailHeaderSelector, gridRowsPendingPayments, sideBarPendingPaymentSelector, testingCategoryHeaderSelector, testingCategoryListSelector } from '../../CompositeFolder/Selectors/UserSelectors';
import { aTagOptions, buttonOptions, detailHeaderOptions, testingCategory } from '../../CompositeFolder/Helpers/enumVariables';

fixture `Pending Payment Tests`
    .page(testingUrl).beforeEach(async t => {
        // Resize window
        await t.resizeWindow(1280,800);
        });

test('should login, inspect cavages pending payment in Plooto dashboard and assert its content loads', async t => {
    // Arrange
    await login();
    await dashboardNavigation();

    // Act
    await t.click(sideBarPendingPaymentSelector)
    
    // Assert
    .expect((await cardSelector(testingCategory.pendingPayments)).exists).eql(true)
    .expect((await testingCategoryHeaderSelector(testingCategory.pendingPayments)).textContent).contains('Payments currently in transit')
    .expect((await testingCategoryListSelector(testingCategory.pendingPayments)).textContent).contains('Pending Payables')
    .expect(gridRowsPendingPayments.count).gt(0)

    // Act
    .click(gridRowsPendingPayments.withText('Cavages'))

    // Assert
    .expect(firstDetailHeaderSelector.exists).eql(true)
    .expect((await aTagSelector(aTagOptions.pdf)).exists).eql(true)
    .expect((await aTagSelector(aTagOptions.edit)).exists).eql(true)
    .expect((await aTagSelector(aTagOptions.delete)).exists).eql(true)
    .expect((await detailHeaderSelector(detailHeaderOptions.paymentAttachments)).exists).eql(true)
    .expect((await detailHeaderSelector(detailHeaderOptions.paymentApprovalHistory)).exists).eql(true)
    .expect((await detailHeaderSelector(detailHeaderOptions.paymentLineItems)).exists).eql(true)
    .expect((await detailHeaderSelector(detailHeaderOptions.additionalDetails)).exists).eql(true)
    .expect((await buttonSelector(buttonOptions.approve)).exists).eql(true)
    .expect((await buttonSelector(buttonOptions.reject)).exists).eql(true);

});
