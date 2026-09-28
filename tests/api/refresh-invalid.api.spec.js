import {test,expect} from '@playwright/test'
import { loginApi } from './helpers/apiAuth'
import { API_URL } from '../utils/testData'

test.describe('Authentication API',()=>{
    test('TC020 - Refresh Token After Logout',async ({request})=>{
        await loginApi(request);
        const logout = await request.get(`${API_URL}/api/auth/logout`)
        expect(logout.status()).toBe(200)
        const refresh = await request.post(`${API_URL}/api/auth/refresh-token`)

        expect(refresh.status()).toBe(401)
        const body = await refresh.json()
        expect(body.message).toBeTruthy();
    })
})