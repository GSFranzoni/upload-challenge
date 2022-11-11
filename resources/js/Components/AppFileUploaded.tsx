import React, { useContext, useEffect } from 'react';
import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useClipboard,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import AppCard from './AppCard';
import { FileUploadContext } from '../Contexts/FileUploadContext';

const AppFileUploaded: React.FC = () => {
  const { url, reset } = useContext(FileUploadContext);

  const { onCopy } = useClipboard(url);

  const toast = useToast();

  return (
    <AppCard w="450px" maxW="90%" p={5} pt={10} borderRadius={8}>
      <VStack gap={3} textAlign="center">
        <CheckCircleIcon boxSize={12} color="green.500" />
        <Text fontSize="xl">Uploaded Successfully!</Text>
        <Image width="90%" src={url} alt="uploaded" />
        <InputGroup>
          <Input readOnly value={url} fontSize={12} paddingRight="5rem" />
          <InputRightElement width="5rem">
            <Button
              onClick={() => {
                onCopy();
                toast({
                  title: 'Copied',
                  status: 'success',
                  duration: 2000,
                  isClosable: true,
                });
              }}
              size="sm"
              colorScheme="blue"
              variant="solid"
              fontSize={10}
            >
              Copy Link
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          onClick={reset}
          m={0}
          fontSize="xs"
          size="sm"
          variant="ghost"
          color="gray.400"
        >
          Upload another image
        </Button>
      </VStack>
    </AppCard>
  );
};

export default AppFileUploaded;
