import { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { NotificationPage } from './pages/notificationPage';
import Data from './data/data.json';

function App() {
	interface Notification {
		id: string;
		image:string;
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

	return (
		<Box height={'100vh'} bg={'hsl(210, 60%, 98%)'}>
			<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
				<NotificationPage unique={true} data={notify}></NotificationPage>
			</Box>
		</Box>
	);
}

export default App;
