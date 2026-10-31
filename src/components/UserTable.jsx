import React from 'react'

export default function UserTable({ data, onSelect }) {
  return (
    <section className='w-full flex justify-center'>
      <table className="w-full border-collapse text-sm text-neutral-900 ">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="px-3 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">No</th>
            <th className="px-3 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">Name</th>
            <th className="px-3 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">Email</th>
            <th className="px-3 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">Telephone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((u, i) => (
            <tr key={u.id} className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="px-3 py-2.5 text-neutral-400">{i + 1}</td>
              <td className="px-3 py-2.5">{u.name}</td>
              <td className="px-3 py-2.5">{u.email}</td>
              <td className="px-3 py-2.5">{u.phone}</td>
              <td className="px-3 py-2.5"><button onClick={() => onSelect(u)} className='text-blue-800 bg-blue-300 hover:bg-blue-200 duration-300 cursor-pointer py-1 px-2 rounded-lg'>Detail</button></td>
            </tr>
          ))}
        </tbody> 
      </table>
    </section>
  )
}
