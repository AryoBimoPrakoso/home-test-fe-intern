const API_URL = "https://jsonplaceholder.typicode.com/users"
export async function getDataUser() {
    try {
        const res = await fetch(API_URL);
        if(!res.ok) {
            console.error(`Terjadi error, dengan status : ${res.status}`)
            return;
        }
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error(`Terjadi error : ${err.message}`)
    }
}
getDataUser();