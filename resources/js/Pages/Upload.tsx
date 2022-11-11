import React, { useContext } from 'react';
import { Container, Fade, Flex } from '@chakra-ui/react';
import AppFilePicker from '../Components/AppFilePicker';
import AppUploading from '../Components/AppUploading';
import { FileUploadContext } from '../Contexts/FileUploadContext';
import AppFileUploaded from '../Components/AppFileUploaded';

const Upload: React.FC = () => {
  const { status } = useContext(FileUploadContext);
  return (
    <Container
      as={Flex}
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Fade in={status === 'idle'}>
        {status === 'idle' && <AppFilePicker />}
      </Fade>
      <Fade in={status === 'uploading'}>
        {status === 'uploading' && <AppUploading />}
      </Fade>
      <Fade in={status === 'success'}>
        {status === 'success' && <AppFileUploaded />}
      </Fade>
    </Container>
  );
};

export default Upload;
