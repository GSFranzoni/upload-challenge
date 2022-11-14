import React, { useContext, useEffect } from 'react';
import {
  Button,
  CircularProgress,
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
    <AppCard w="420px" p={5} py={8} borderRadius={8} shadow={['none', 'lg']}>
      <VStack gap={3} textAlign="center" px={2}>
        <CheckCircleIcon boxSize={12} color="green.500" />
        <Text fontSize="xl">Uploaded Successfully!</Text>
        <Image
          width="100%"
          minHeight="250px"
          src={url}
          alt="uploaded"
          fallback={<CircularProgress isIndeterminate />}
          borderRadius={12}
        />
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
