import { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { NotificationPage } from './pages/notificationPage';
import Data from './data/data.json';
import { checkTargetForNewValues } from 'framer-motion';

function App() {
	interface Notification {
		id: string;
		image: string;
		user: string;
		action: string;
		reaction: string | null;
		time: string;
		status: string;
		details?: string | null;
	}

	const [notify, setNotify] = useState<Notification[]>([]);

	useEffect(() => {
		setNotify(Data);
	}, []);

	const markAll = () => {
		const newDate = Data.map((values) => {
			return { ...values, status: 'unread' };
		});
		setNotify(newDate);
	};

	const markAsRead = (id:string) => {
		const read = Data.map((values) => {
			if(values.id === id && id !== undefined){
				return { ...values, status: 'read' };
			}
		});
		console.log(read)
		// setNotify(read);
	};

	return (
		<Box height={'100vh'} bg={'hsl(210, 60%, 98%)'}>
			<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
				<NotificationPage unique={true} data={notify} styles={markAll}></NotificationPage>
			</Box>
		</Box>
	);
}

export default App;
