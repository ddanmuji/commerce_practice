import { convertFromRaw, EditorState } from 'draft-js';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Carousel from 'nuka-carousel/lib/carousel';
import { useEffect, useState } from 'react';

import { CustomEditor } from '@/components';

const ProductsPage: NextPage = () => {
	const router = useRouter();
	const { id: productId } = router.query;
	const [editorState, setEditorState] = useState<EditorState | null>(null);

	useEffect(() => {
		if (productId) {
			fetch(`/api/get-product?id=${productId}`)
				.then(res => res.json())
				.then(data => {
					if (data.product?.contents) {
						setEditorState(
							EditorState.createWithContent(convertFromRaw(JSON.parse(data.product.contents)))
						);
					} else {
						setEditorState(EditorState.createEmpty());
					}
				});
		}
	}, [productId]);

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
			{editorState && <CustomEditor editorState={editorState} readonly />}
		</div>
	);
};

export default ProductsPage;
