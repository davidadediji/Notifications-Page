import { Box, Text } from '@chakra-ui/react';
import React from 'react';

type Person = {
	user: string;
	action: string;
	reaction?: string|null;
	time: string;
	status: string;
	details?: string|null;
};

export const Card = ({ user, action, reaction, time, status, details }: Person) => {
	return <Box border={'1px solid blue'} mt={2}>
        <Text textAlign={'left'}>
        {user} {action} {reaction}
        </Text>
      </Box>;
};
