export function generateUser(){
const id=Date.now()
return {
username:`user${id}`,
email:`user${id}@testmail.com`,
password:`Test@123`
}
}