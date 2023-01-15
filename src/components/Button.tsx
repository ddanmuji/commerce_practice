import styled from '@emotion/styled';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
	return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
	border: 0;
	border-radius: 4px;
	cursor: pointer;
	padding: 8px 12px;
	background: royalblue;
	transition: 250ms;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		filter: brightness(80%);
	}
`;
