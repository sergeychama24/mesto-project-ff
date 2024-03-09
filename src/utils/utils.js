export function checkResponse(res){
    if (res.ok) {
        console.log(res);
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}