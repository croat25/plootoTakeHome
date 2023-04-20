import { t } from 'testcafe';
import { dashboardPlootoSelector, dashboardTableRowSelector } from '../Selectors/UserSelectors';

export async function dashboardNavigation(){
    await t.expect(dashboardPlootoSelector.exists).eql(true)
        .expect(dashboardTableRowSelector.count).gt(2)
        .click(dashboardTableRowSelector.child().child().withText('Plooto Inc'))
}