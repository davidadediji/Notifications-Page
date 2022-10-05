import { Box, Center, VStack, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../components/Card';

interface DataProps {
	data: {
		id: string;
		user: string;
		action: string;
		reaction?: string | null; 
		time: string;
		status: string;
		details?: string | null;
	}[];
	unique: true;
}

export const NotificationPage = ({ data, unique }: DataProps) => {
	return (
		<Box mt={100} bg={'#fff'} p={5}>
			<Flex py={3} pb={'4'}>
				<Box fontWeight={800}>Notifications</Box>
				<Spacer />
				<Box fontSize={'14px'}> Mark all as read</Box>
			</Flex>
			<Box>
				{data.map((detail) => {
					return (
						<Card
							user={detail.user}
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
