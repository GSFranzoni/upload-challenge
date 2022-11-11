import React from 'react';
import { Flex, Input, InputProps, Text } from '@chakra-ui/react';

type TextFieldProps = InputProps & {
  label: string;
  hint?: string;
};

const AppTextField: React.FC<TextFieldProps> = ({ label, hint, ...props }) => (
  <Flex flexDir="column" gap={2}>
    <Text fontWeight={500} fontSize="sm">
      {label}
    </Text>
    <Input {...props} />
    {hint && (
      <Text fontSize="xs" color="red.500" fontWeight={500}>
        {hint}
      </Text>
    )}
  </Flex>
);

export default AppTextField;
