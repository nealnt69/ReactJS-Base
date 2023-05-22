import { ComponentType } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

function Home() {
	const { t } = useTranslation(['common']);
	const { isLoading, error } = useQuery<unknown, Error>('repoData', () =>
		fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
			(res) => res.json()
		)
	);

	if (isLoading) return 'Loading....';

	if (error) return `An error has occurred: ${error.message}`;

	return <div>{t('hello')}</div>;
}

export default Home as ComponentType;
