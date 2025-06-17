import './assets/css/index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Layout from './components/Layout/Layout.tsx';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</Layout>
	);
}

export default App;
