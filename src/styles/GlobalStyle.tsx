import { css, Global } from '@emotion/react';

import { reset } from './shared/reset';

const GlobalStyle = () => {
	return (
		<Global
			styles={css`
				${reset}

				a {
					text-decoration: none;
				}
			`}
		/>
	);
};

export default GlobalStyle;
