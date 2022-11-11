import React from 'react';
import { Progress, Text } from '@chakra-ui/react';
import AppCard from './AppCard';

const AppUploading: React.FC = () => {
  return (
    <AppCard w="450px" maxW="90%" p={10} borderRadius={8}>
      <Text fontSize="md" fontWeight={500}>
        Uploading...
      </Text>
      <Progress borderRadius={8} mt={8} size="sm" isIndeterminate />
    </AppCard>
  );
};

export default AppUploading;
