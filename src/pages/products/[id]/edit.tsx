import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { CustomEditor } from '@/components';

const ProductsPage: NextPage = () => {
	const router = useRouter();
	const { id: productId } = router.query;
	const [editorState, setEditorState] = useState<EditorState | null>(null);
	const onSave = () => {
		if (editorState) {
			fetch('/api/update-product', {
				method: 'POST',
				body: JSON.stringify({
					id: productId,
					contents: JSON.stringify(convertToRaw(editorState.getCurrentContent()))
				})
			})
				.then(res => res.json())
				.then(data => {
					console.log('data', data);
				});
		}
	};

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
		<>
			{editorState && (
				<CustomEditor
					editorState={editorState}
					onEditorStateChange={setEditorState}
					onSave={onSave}
				/>
			)}
		</>
	);
};

export default ProductsPage;
