import {test,expect} from '@playwright/test'
import { loginApi } from './helpers/apiAuth.js'

test('TC009 - Valid Login', async ({ request })=>{
     const body = await loginApi(request)
     expect(body.message).toBe('Logged In Successfully');
     expect(body.accessToken).toBeTruthy();
})