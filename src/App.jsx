import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Layout from './layout/Layout'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route index element={<Home />} />
					<Route path='/category/:type' element={<Category />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
