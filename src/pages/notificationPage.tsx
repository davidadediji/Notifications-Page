import { Box } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../components/Card';


interface DataProps {
	data: {
		id: string;
		user: string;
		action: string;
		reaction: string;
		time: string;
		status: string;
		details?:string|null;
	}[];
}

export const NotificationPage = ({ data }: DataProps) => {
	return (
		<Box>
			{data.map((detail) => {
				return (
					<Card key={detail.user} firstname={detail.action}></Card>
				);
			})}
		</Box>
	);
};
