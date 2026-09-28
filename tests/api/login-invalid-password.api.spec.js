import {test,expect } from '@playwright/test'
import { invalidPassword,API_URL} from '../utils/testData'

test.describe('Authentication API',()=>{
    test('TC010 - Login with Invalid Password', async ({request})=>{
        const response  = await request.post(`${API_URL}/api/auth/login`,{
            data:{
                email:invalidPassword.email,
                password:invalidPassword.password
            }
        })
        expect(response.status()).toBe(401)
        const body = await response.json()
        expect(body.message).toBe('invalid email or password ')
    })
})