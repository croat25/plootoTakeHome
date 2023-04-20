import { Selector, t } from 'testcafe';

// static selectors
export const gridRowsPendingPayments = Selector('tr[class="editRow h-du-8"]');
export const firstDetailHeaderSelector = Selector('div[class="details-header details-header-first"]');
export const sideBarPendingPaymentSelector = Selector('li').withAttribute('data-bind', /.+PendingPayments+./);
export const gridRowPaymentApprovals = Selector('tr[class="editRow payment-line-item-parent payment-line-item-zebra"]');
export const dashboardPlootoSelector = Selector('div[class="card-plooto"]');
export const plootoHeaderSelector = Selector('h1').withText('Plooto Inc');
export const listApprovedPaymentSelector = Selector('li').withAttribute('data-bind', /.+ApprovePayments+./);
export const inputEmailSelector = Selector('input[id="email"]');
export const inputpasswordSelector = Selector('input[id="passphrase"]');
export const signInButton = Selector('span').withText('Sign In');
export const dashboardTableRowSelector = Selector('tr').withAttribute('data-bind', /[a-zA-Z].+bind\(\$[a-zA-Z]+,[a-zA-Z]+,\'[a-zA-Z]+\'\)/);

//multi purpose selectors
export async function testingCategoryHeaderSelector(testingCategory: string) {
    const testingCategoryRegex = new RegExp(`.+${testingCategory}`);
    return Selector('div[class="card-plooto"]').withAttribute('data-bind', testingCategoryRegex).child('div[class="clearfix"]').child().child('h3');
}

export async function detailHeaderSelector(headerCategory: string) {
    return Selector('div[class="details-header"]').withText(headerCategory);
}

export async function cardSelector(testingCategory: string) {
    const testingCategoryRegex = new RegExp(`.+${testingCategory}`);
    return Selector('div[class="card-plooto"]').withAttribute('data-bind',testingCategoryRegex)
}

export async function buttonSelector(buttonAction: string) {
    return Selector('button[type="button"]').withText(buttonAction);
}

export async function testingCategoryListSelector(testingCategory: string) {
    const testingCategoryRegex = new RegExp(`.+${testingCategory}`);
    return Selector('div[class="card-plooto"]').withAttribute('data-bind', testingCategoryRegex).child('div[class="clearfix"]').child('ul').child('li');
}

export async function aTagSelector(tagAction:string) {
    return Selector('a').withText(tagAction);
}

export async function dashboardListSelector(testingCategory: string) {
    const testingCategoryRegex = new RegExp(`.+${testingCategory}+.`);
    return Selector('li').withAttribute('data-bind', testingCategoryRegex);
}