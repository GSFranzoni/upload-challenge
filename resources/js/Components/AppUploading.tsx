import React, { useContext } from 'react';
import { Progress, Text } from '@chakra-ui/react';
import AppCard from './AppCard';
import { FileUploadContext } from '../Contexts/FileUploadContext';

const AppUploading: React.FC = () => {
  const { progress } = useContext(FileUploadContext);
  return (
    <AppCard w="420px" p={10} borderRadius={8} shadow={['none', 'lg']}>
      <Text fontSize="md" fontWeight={500}>
        Uploading...
      </Text>
      <Progress
        value={progress?.percentage || 0}
        borderRadius={8}
        mt={8}
        size="sm"
      />
    </AppCard>
  );
};

export default AppUploading;
