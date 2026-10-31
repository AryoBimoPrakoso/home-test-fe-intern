import { useState, useEffect } from 'react'
import './App.css'
import { getDataUser } from './services/getUser'
import UserTable from './components/UserTable'
import SearchUser from './components/SearchUser'
import Modal from './components/Modal'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getDataUser();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [])

  const searchData = data.filter((user) =>
    user.name.toLowerCase().includes(searchLoading.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => setSearchLoading(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  if (loading) return <div className='h-screen grid place-items-center'>Loading.....</div>
  if (error) return <div className='h-screen grid place-items-center text-red-300'>{error}</div>

  return (
    <main className='h-screen flex flex-col justify-center items-center p-14'>
      <SearchUser value={search} onChange={setSearch} />
      <UserTable data={searchData} onSelect={setSelectedUser}/>
      <Modal user={selectedUser} onClose={() => setSelectedUser(null)}/>
    </main>
  )
}

export default App
