'use client';
import { Text } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

export const Navbar = () => (
	<S.Container>
		<Text>Home</Text>
	</S.Container>
);

const S = {
	Container: styled.div`
		display: flex;
		border: 1px solid #8080805c;
		border-radius: 10px;
		padding: 20px;
		max-width: 650px;
	`,
};
