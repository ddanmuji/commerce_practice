import { css } from '@emotion/react';
import { NextPage } from 'next';
import { ChangeEvent, useEffect, useState } from 'react';

const Index: NextPage = () => {
	const [products, setProducts] = useState<
		{ id: string; properties: { [key: string]: { id: string } } }[]
	>([]);
	useEffect(() => {
		fetch('/api/get-items')
			.then(res => res.json())
			.then((data: any) => setProducts(data.items));
	}, []);

	const [value, setValue] = useState('');
	const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
	const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!value) return alert('no value');
		fetch(`/api/add-item?name=${value}`)
			.then(res => res.json())
			.then(data => console.log('###', data));
	};

	return (
		<div>
			<form
				onSubmit={onSubmit}
				style={{
					marginTop: '36px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '10px'
				}}
			>
				<input type="text" value={value} onChange={onChange} />
				<button type="submit">add</button>
			</form>
			<br />
			<div
				css={css`
					width: 52px;
					height: 52px;
					background-color: royalblue;
				`}
			></div>
			{products &&
				products.map(product => (
					<div key={product.id}>
						{product.properties &&
							Object.entries(product.properties).map(([key, value]) => (
								<button
									key={key}
									onClick={() => {
										fetch(`/api/get-detail?pageId=${product.id}&propertyId=${value.id}`)
											.then(res => res.json())
											.then(data => console.log(data.item));
									}}
								>
									{key}
								</button>
							))}
					</div>
				))}
		</div>
	);
};

export default Index;
