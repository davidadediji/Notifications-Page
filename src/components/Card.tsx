import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react';
import Image from '../assets/avatar-anna-kim.webp';

type Person = {
	user: string;
	image: string;
	action: string;
	reaction?: string | null;
	time: string;
	status: string;
	details?: string | null;
};

export const Card = ({
	user,
	action,
	image,
	reaction,
	time,
	status,
	details,
}: Person) => {
	console.log(image);
	return (
		<Box mt={2} display={'flex'}>
			<Box>
				<Avatar size='sm' name={user} src={image} />
			</Box>
			<Box ml={4} width={550}>
				<Text
					as={'span'}
					fontWeight={800}
					_hover={{
						background: 'white',
						color: 'teal.500',
						cursor:'pointer'
					}}
				>
					{' '}
					{user}{' '}
				</Text>
				<Text as={'span'}> {action} </Text>
				<Text as={'span'} fontWeight={500}>
					{' '}
					{reaction}
				</Text>
				<Box lineHeight={1.5}>{time}</Box>
				{details && (
					<Box
						border={'1px solid hsl(211, 68%, 94%)'}
						width={545}
						p={4}
						mt={'2'}
						borderRadius={'10px'}
					>
						{details}
					</Box>
				)}
			</Box>
		</Box>
	);
};
