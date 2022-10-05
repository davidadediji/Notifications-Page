import { Box, Center, VStack, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../components/Card';

interface DataProps {
	data: {
		id: string;
		image: string;
		user: string;
		action: string;
		reaction?: string | null;
		time: string;
		status: string;
		details?: string | null;
	}[];
	unique: true;
	styles: () => void;
	handleClick?: (id: string) => () => void;
	count?:number
}

export const NotificationPage = ({
	data,
	unique,
	styles,
	handleClick,
	count
}: DataProps) => {
	
	return (
		<Box mt={100} bg={'#fff'} p={5}>
			<Flex py={3} pb={'4'}>
				<Box fontWeight={800}>
					Notifications{' '}
					<Text as={'span'} bg={'blue'} px={2} py={0.5} color={'#fff'}>
						{count}
					</Text>
				</Box>
				<Spacer />
				<Box
					fontSize={'14px'}
					_hover={{
						background: 'white',
						color: 'blue.600',
						cursor: 'pointer',
					}}
				>
					<Text onClick={styles}>Mark all as read</Text>
				</Box>
			</Flex>
			<Box>
				{data.map((detail) => {
					return (
						<Card
							onClick={handleClick?.(detail.id)}
							user={detail.user}
							image={detail.image}
							action={detail.action}
							reaction={detail.reaction}
							time={detail.time}
							status={detail.status}
							key={detail.id}
							details={detail.details}
						></Card>
					);
				})}
			</Box>
		</Box>
	);
};
