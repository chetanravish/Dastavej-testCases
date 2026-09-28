import {test,expect} from '@playwright/test'
import { loginApi } from './helpers/apiAuth.js'
import { API_URL,validUser } from '../utils/testData.js'

test.describe('Authentication API',()=>{
    test('TC018 - GetMe with valid token',async ({request})=>{
        const auth = await loginApi(request)

        const response = await request.get(`${API_URL}/api/auth/getme`,{
            headers:{
                Authorization:`Bearer ${auth.accessToken}`,
            }
        })
        expect(response.status()).toBe(200)
        const body=await response.json()
        expect(body.user).toBeTruthy()
        expect(body.user.email).toBe(validUser.email)
    })
})