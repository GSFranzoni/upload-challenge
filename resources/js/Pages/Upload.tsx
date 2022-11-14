import React, { useContext } from 'react';
import { ScaleFade, Flex, Box } from '@chakra-ui/react';
import AppFilePicker from '../Components/AppFilePicker';
import AppUploading from '../Components/AppUploading';
import { FileUploadContext } from '../Contexts/FileUploadContext';
import AppFileUploaded from '../Components/AppFileUploaded';
import AppFileUploadFailed from '../Components/AppFileUploadFailed';

const Upload: React.FC = () => {
  const { status } = useContext(FileUploadContext);
  return (
    <Flex h="full" alignItems="center" justifyContent="center">
      <ScaleFade initialScale={0.9} in={status === 'idle'}>
        {status === 'idle' && <AppFilePicker />}
      </ScaleFade>
      <ScaleFade initialScale={0.9} in={status === 'uploading'}>
        {status === 'uploading' && <AppUploading />}
      </ScaleFade>
      <ScaleFade initialScale={0.9} in={status === 'success'}>
        {status === 'success' && <AppFileUploaded />}
      </ScaleFade>
      <ScaleFade initialScale={0.9} in={status === 'error'}>
        {status === 'error' && <AppFileUploadFailed />}
      </ScaleFade>
    </Flex>
  );
};

export default Upload;
