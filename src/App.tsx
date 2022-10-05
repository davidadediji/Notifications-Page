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
	const [count, setCount] = useState<number>(0)

	useEffect(() => {
		
		setNotify(Data);
	}, []);

	useEffect(()=>{
		const readNotify = notify.filter((value)=>(value.status==='unread'))
		setCount(readNotify.length)
	},[notify])

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
	
	const handleClick = (id: string) => {
		const cp = () => {
			const newNotify = notify.map((value)=>{
				if (value.id === id){
					return {...value, status:'read'}
				}
				return value
			})
			setNotify(newNotify)
		};
		return cp;
	};
	return (
		<Box height={'100vh'} bg={'hsl(210, 60%, 98%)'}>
			<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
				<NotificationPage unique={true} data={notify} styles={markAll}  handleClick={handleClick} count={count}></NotificationPage>
			</Box>
		</Box>
	);
}

export default App;
