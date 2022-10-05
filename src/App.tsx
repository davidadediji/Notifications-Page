import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { NotificationPage } from './pages/notificationPage';
import Data from './data/data.json'

function App() {

  const nameObj = {
    firstname:'David',
    lastname:'Adediji'
  }

  type Notification = [
    id: string,
		user: string,
		action: string,
		reaction: string,
		time: string,
		status: string,
		details?:string|null
  ]

  const [notify, setNotify] = useState<Notification[]|undefined>()

  useEffect(()=>{
    setNotify(Data)
  },[])

	return (
		<Box>
      <NotificationPage data = {notify}></NotificationPage>
			
		</Box>
	);
}

export default App;
