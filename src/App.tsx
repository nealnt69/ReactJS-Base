import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { store } from '@/store';
import RootRoutes from '@/routes';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Suspense fallback={<></>}>
					<RootRoutes />
				</Suspense>
			</Provider>
		</QueryClientProvider>
	);
}

export default App;
