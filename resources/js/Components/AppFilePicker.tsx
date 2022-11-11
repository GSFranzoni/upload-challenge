import React, { useContext, useEffect, useMemo } from 'react';
import { Button, Image, Text, VStack } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import UploadImage from '../Assets/image.svg';
import AppCard from './AppCard';
import { FileUploadContext } from '../Contexts/FileUploadContext';

const AppFilePicker: React.FC = () => {
  const { upload } = useContext(FileUploadContext);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.item(0);
    if (!selected) {
      return;
    }
    upload(selected);
  };

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/gif': ['.gif'],
    },
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      upload(acceptedFiles.shift() as File);
    }
  }, [acceptedFiles]);

  const dropzoneBorderColor = useMemo(() => {
    if (isDragAccept) {
      return 'green.500';
    }
    if (isDragReject) {
      return 'red.500';
    }
    if (isFocused) {
      return 'blue.500';
    }
    return 'gray.300';
  }, [isDragAccept, isDragReject, isFocused]);

  return (
    <AppCard w="450px" maxW="90%" p={10} borderRadius={8}>
      <VStack gap={3} textAlign="center">
        <Text fontSize="2xl">Upload your image</Text>
        <Text fontSize="xs" fontWeight={600} color="gray.400">
          File should be Jpeg, Png,...
        </Text>
        <VStack
          {...getRootProps()}
          experimental_spaceY={5}
          justifyContent="center"
          w="338px"
          maxW="95%"
          borderStyle="dashed"
          borderWidth={1}
          borderRadius={5}
          borderColor={dropzoneBorderColor}
          p={10}
        >
          <Image src={UploadImage} alt="upload" />
          <Text fontSize="md" color="gray.400" fontWeight={400}>
            Drag & Drop your images here
          </Text>
        </VStack>
        <Text fontSize="sm" color="gray.400">
          Or
        </Text>
        <input
          {...getInputProps()}
          onChange={handleChooseFile}
          ref={inputRef}
          type="file"
        />
        <Button
          size="md"
          fontSize={15}
          fontWeight={400}
          borderRadius={8}
          colorScheme="blue"
          variant="solid"
          onClick={() => inputRef.current?.click()}
        >
          Choose a file
        </Button>
      </VStack>
    </AppCard>
  );
};

export default AppFilePicker;
