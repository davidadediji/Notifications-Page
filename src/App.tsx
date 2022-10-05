import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { NotificationPage } from './pages/notificationPage';
import Data from './data/data.json'

function App() {

  interface Notification {
    id: string,
		user: string,
		action: string,
		reaction: string,
		time: string,
		status: string,
		details?:string|null
  }

  const [notify, setNotify] = useState<Notification[]>([])

  useEffect(()=>{
    setNotify((prev)=>[...prev, ...Data])
  }, [])

	return (
		<Box>
      <NotificationPage unique={true} data={notify}></NotificationPage>
			
		</Box>
	);
}

export default App;
