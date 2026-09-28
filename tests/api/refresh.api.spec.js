import {test,expect} from '@playwright/test'
import { loginApi } from './helpers/apiAuth.js'
import { API_URL } from '../utils/testData.js'

test.describe('Authentication API',()=>{
    test('TC019 - Refresh access token',async ({request})=>{
        const login = await loginApi(request)
        const response = await request.post(`${API_URL}/api/auth/refresh-token`)
        expect(response.status()).toBe(200)

        const body = await response.json()

        expect(body.accessToken).toBeTruthy()

    })
})