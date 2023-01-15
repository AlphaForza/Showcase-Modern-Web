import Root from './Layout/Root';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Home from './page/Home';
import Mobile from './page/Mobile';
import Blog from './page/Blog';
import Licence from './page/Licence';
import Contact from './page/Contact';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Root />}>
			<Route index path='/' element={<Home />} />
			<Route path='/mobile' element={<Mobile />} />
			<Route path='/blog' element={<Blog />} />
			<Route path='/licence' element={<Licence />} />
			<Route path='/contact' element={<Contact />} />
		</Route>
	)
);

function App() {
	return (
		<div className='font-mainFont'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
