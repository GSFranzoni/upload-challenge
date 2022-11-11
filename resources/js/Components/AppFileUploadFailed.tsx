import React, { useContext } from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import AppCard from './AppCard';
import { FileUploadContext } from '../Contexts/FileUploadContext';

const AppFileUploadFailed: React.FC = () => {
  const { reset, error } = useContext(FileUploadContext);

  return (
    <AppCard w="350px" maxW="90%" p={5} py={8} borderRadius={8}>
      <VStack gap={3} textAlign="center">
        <WarningIcon boxSize={12} color="red.500" />
        <Text fontSize="xl">Upload Failed!</Text>
        <Text fontSize="xs" fontWeight={600} color="gray.400">
          {error}
        </Text>
        <Button
          onClick={reset}
          m={0}
          fontSize="xs"
          size="sm"
          variant="solid"
          color="gray.400"
        >
          Try Again
        </Button>
      </VStack>
    </AppCard>
  );
};

export default AppFileUploadFailed;
