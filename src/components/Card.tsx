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
		<Box mt={2} display={'flex'}>
			<Box>
				<Avatar
					size='sm'
					name='Ryan Florence'
					src='https://bit.ly/ryan-florence'
				/>
			</Box>
			<Box ml={4}>
				<Text as={'span'} fontWeight={800}>{user} </Text>
				<Text as={'span'}> {action} </Text>
				<Text as={'span'} fontWeight={500}> {reaction}</Text>
				<Box lineHeight={1.5}>{time}</Box>
				{details && (
					<Box border={'1px solid hsl(211, 68%, 94%)'} width={545} p={4} mt={'2'} borderRadius={'10px'}>
						{details}
					</Box>
				)}
			</Box>
		</Box>
	);
};
