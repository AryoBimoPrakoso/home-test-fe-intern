const API_URL = "https://jsonplaceholder.typicode.com/users";
export async function getDataUser() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`Terjadi error, dengan status : ${res.status}`);
  }
  return res.json();
}
