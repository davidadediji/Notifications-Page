import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

type Person = {
	user: string;
	action: string;
	reaction?: string | null;
	time: string;
	status: string;
	details?: string | null;
};

export const Card = ({
	user,
	action,
	reaction,
	time,
	status,
	details,
}: Person) => {
	return (
		<Box border={'1px solid blue'} mt={2} display={'flex'}>
			<Box border={'1px solid blue'}>
				<Avatar
					size='sm'
					name='Ryan Florence'
					src='https://bit.ly/ryan-florence'
				/>
			</Box>
			<Box border={'1px solid red'} ml={4}>
				<Flex gap={1.5}>
					<Text>{user}</Text>
					<Text>{action}</Text>
					<Text>{reaction}</Text>
				</Flex>
				{details && <Box>
					{details}
				</Box>}
			</Box>
		</Box>
	);
};
