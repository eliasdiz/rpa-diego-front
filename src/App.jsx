import './App.css'
import React, { useState } from 'react'
import Dashboard from './components/Dashboard'

export default function App() {
	const [activeTab, setActiveTab] = useState("manual")
	console.log(activeTab)

	return (
		<div className='h-[100vh] bg-gray-700 flex justify-center items-center'>
			<Dashboard activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
	)
}
