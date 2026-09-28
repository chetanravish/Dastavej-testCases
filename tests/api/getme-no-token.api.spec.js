import {test,expect} from '@playwright/test'
import { API_URL } from '../utils/testData'

test.describe('Authentication API',()=>{
    test('TC016 - GetMe Without Token',async ({request})=>{
        const response = await request.get(`${API_URL}/api/auth/getme`)

        expect(response.status()).toBe(401)
        const body = await response.json();
        expect(body.message).toBeTruthy()
    })
})