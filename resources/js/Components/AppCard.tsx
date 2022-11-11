import React, { PropsWithChildren } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

type AppCardProps = BoxProps & PropsWithChildren;

const AppCard: React.FC<AppCardProps> = ({ children, ...props }) => (
  <Box p={5} shadow="md" borderWidth="1px" {...props}>
    {children}
  </Box>
);

export default AppCard;
