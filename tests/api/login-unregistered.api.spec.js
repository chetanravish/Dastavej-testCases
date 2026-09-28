import {test,expect} from '@playwright/test'
import { unregisteredUser,API_URL } from '../utils/testData'

test.describe('API Authentication',()=>{
    test('TC011 - Login with Unregistered Email',async ({request})=>{
        const response = await request.post(`${API_URL}/api/auth/login`,{
            data:{
                email:unregisteredUser.email,
                password:unregisteredUser.password
            }
        })
        expect(response.status()).toBe(401)
        const body = await response.json()
        expect(body.message).toBe('invalid email or password ')
    })
})