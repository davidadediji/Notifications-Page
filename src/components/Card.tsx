import { Avatar, Box, Icon, Text } from '@chakra-ui/react';
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
		<Box
			mt={2}
			display={'flex'}
			bg={status === 'unread' ? 'hsl(205, 33%, 90%)' : '#fff'}
			p={2}
			borderRadius={'10px'}
		>
			<Box>
				<Avatar size='sm' name={user} src={image} />
			</Box>
			<Box ml={4} width={550}>
				<Text
					as={'span'}
					fontWeight={800}
					_hover={{
						color: 'blue.600',
						cursor: 'pointer',
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
				{status === "unread" && (
					<Icon viewBox='0 0 200 200' color='red.500'>
						<path
							fill='currentColor'
							d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
						/>
					</Icon>
				)}
				<Box lineHeight={1.5}>{time}</Box>
				{details && (
					<Box
						border={'1px solid hsl(211, 68%, 94%)'}
						width={545}
						p={4}
						mt={'2'}
						borderRadius={'10px'}
						_hover={{
							background: 'hsl(205, 33%, 90%)',
							cursor: 'pointer',
						}}
					>
						{details}
					</Box>
				)}
			</Box>
		</Box>
	);
};
