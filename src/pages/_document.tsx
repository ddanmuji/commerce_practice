import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="ko">
			<Head>
				<meta property="og:url" content="http://localhost:3000/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="React 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리"
				/>
				<meta
					property="og:description"
					content="React 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리"
				/>
				<meta property="og:image" content="https://reactjs.org/logo-og.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
