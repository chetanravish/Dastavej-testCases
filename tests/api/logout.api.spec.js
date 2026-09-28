import {test,expect} from '@playwright/test'
import { loginApi } from './helpers/apiAuth.js'
import { API_URL } from '../utils/testData'

test.describe('Authentication Api',()=>{
    test('TC020 - Logout invalidates the session',async ({request})=>{
        await loginApi(request)

        const logout = await request.get(`${API_URL}/api/auth/logout`)
        expect(logout.status()).toBe(200)

        const logoutBody = await logout.json()
        expect(logoutBody.message).toBe('Logged Out Successfully')

        const refreshToken = await request.post(`${API_URL}/api/auth/refresh-token`)
        expect([401,403]).toContain(refreshToken.status())

    })    
})