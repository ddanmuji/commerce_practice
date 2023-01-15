import { NextPage } from 'next';
import Image from 'next/image';
import Carousel from 'nuka-carousel/lib/carousel';

const ProductsPage: NextPage = () => {
	return (
		<div>
			<Carousel wrapAround={true} slidesToShow={1}>
				<Image
					src="https://picsum.photos/id/1018/1000/600/"
					width={1000}
					height={600}
					alt="dummy"
				/>
				<Image
					src="https://picsum.photos/id/1015/1000/600/"
					width={1000}
					height={600}
					alt="dummy"
				/>
				<Image
					src="https://picsum.photos/id/1019/1000/600/"
					width={1000}
					height={600}
					alt="dummy"
				/>
			</Carousel>
		</div>
	);
};

export default ProductsPage;
