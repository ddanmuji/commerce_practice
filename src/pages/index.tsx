import { products } from '@prisma/client';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const IndexPage: NextPage = () => {
	const [products, setProducts] = useState<products[]>([]);

	useEffect(() => {
		fetch('/api/get-products')
			.then(res => res.json())
			.then(data => setProducts(data.products));
	}, []);

	return (
		<div>
			{products &&
				products.map(product => (
					<div key={product.id}>
						<span>{product.name}</span>
						<span>{String(product.createdAt)}</span>
					</div>
				))}
		</div>
	);
};

export default IndexPage;
