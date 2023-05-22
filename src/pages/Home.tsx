import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

function Home() {
	const { t, i18n } = useTranslation(['common']);
	const { isLoading, error } = useQuery<unknown, Error>('repoData', () =>
		fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
			(res) => res.json()
		)
	);

	if (isLoading) return 'Loading...';

	if (error) return `An error has occurred: ${error.message}`;

	return <div>{t('hello')}</div>;
}

export default Home;
