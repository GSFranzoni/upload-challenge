import React, { useEffect } from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Container,
  Flex,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/inertia-react';
import AppTextField from '../Components/AppTextField';
import AppCard from '../Components/AppCard';

type HomeProps = {
  message: string;
};

const Home: React.FC<HomeProps> = ({ message }) => {

  return (
    <Container
      as={Flex}
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <AppCard>
        {message}
      </AppCard>
    </Container>
  );
};

export default Home;
