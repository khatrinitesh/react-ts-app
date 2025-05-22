import React from 'react'
import { TABLE_DATA } from '../constants/constants'
import { motion } from "framer-motion";

const CenterTables:React.FC = () => {
  return (
    <>
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#e0e5ec] shadow-neumorphism rounded-2xl p-6 w-full max-w-4xl mx-auto overflow-auto"
    >
      <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">Team Members</h2>
      <table className="w-full text-sm text-left text-gray-700">
        <thead>
          <tr className="text-xs uppercase bg-[#e0e5ec] text-gray-600 border-b border-gray-300">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {TABLE_DATA.map((row) => (
            <tr key={row.id} className="hover:bg-white/40 transition">
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.email}</td>
              <td className="px-4 py-2">{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
    </>
  )
}

export default CenterTables
