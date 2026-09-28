import { validUser,API_URL } from "../../utils/testData";

export async function loginApi(request) {
    const response = await request.post(`${API_URL}/api/auth/login`,{
        data:{
            email:validUser.email,
            password:validUser.password
        }
    })
    if(response.status()!== 200){
        throw new Error('Login Api failed')
    }
    return await response.json()
}