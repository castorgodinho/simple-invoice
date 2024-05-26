'use client';
import styled from 'styled-components';
import { Navbar } from '@app/app/components/navbar';

export default function Home() {
	return (
		<S.Container>
			<Navbar />
		</S.Container>
	);
}

const S = {
	Container: styled.div`
		display: flex;
		margin: 40px;
	`,
};
