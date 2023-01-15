import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { Dispatch, FC, SetStateAction } from 'react';
import { EditorProps, EditorState } from 'react-draft-wysiwyg';

import Button from './Button';

const Editor = dynamic<EditorProps>(
	() => import('react-draft-wysiwyg').then(module => module.Editor),
	{ ssr: false }
);

interface CustomEditorProps {
	editorState: EditorState;
	readonly?: boolean;
	onSave?: () => void;
	onEditorStateChange?: Dispatch<SetStateAction<EditorState | null>>;
}

const CustomEditor: FC<CustomEditorProps> = ({
	editorState,
	readonly = false,
	onSave,
	onEditorStateChange
}) => (
	<Wrapper>
		<Editor
			editorState={editorState}
			readOnly={readonly}
			toolbarHidden={readonly}
			toolbarClassName="editorToolbar-hidden"
			wrapperClassName="wrapper-class"
			editorClassName="editor-class"
			onEditorStateChange={onEditorStateChange}
			toolbar={{
				options: ['inline', 'list', 'textAlign', 'link']
			}}
			localization={{ locale: 'ko' }}
		/>
		{!readonly && <Button onClick={onSave}>Save!</Button>}
	</Wrapper>
);

export default CustomEditor;

const Wrapper = styled.div`
	padding: 16px;
`;
