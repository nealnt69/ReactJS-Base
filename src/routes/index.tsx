import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

const Layout = React.lazy(() => import('@/layouts'));
const Home = React.lazy(() => import('@/pages/Home'));

function RootRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default RootRoutes;
