import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

const Index: NextPage = () => {
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
		</div>
	);
};

export default Index;
