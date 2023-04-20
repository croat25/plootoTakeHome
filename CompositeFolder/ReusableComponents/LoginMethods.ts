import { t } from 'testcafe';
import { inputEmailSelector, inputpasswordSelector, signInButton } from '../Selectors/UserSelectors';

export async function login(){
    await t.click(inputEmailSelector)
        .typeText(inputEmailSelector, 'testing@plooto.com')
        .click(inputpasswordSelector)
        .typeText(inputpasswordSelector, 'plooto123')
        .click(signInButton);
}