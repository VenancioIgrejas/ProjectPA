import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex } from '@chakra-ui/layout';
import React, { useState } from 'react';
import ProductModal from '../../components/ProductModal';
import ProductsList from '../../components/ProductsList';

// import { Container } from './styles';

function MainScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState({});

  return (<Flex height="100vh" flexDirection="column" alignItems="center" padding={10} >
    <Box w="sm" h="20" bg='yellowgreen'></Box>
    <Box
      marginTop='auto'
      width="60%"
      maxHeight="60%"
      overflowY='auto'
      bg="gray.50"
      p={5}
      borderRadius={5}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'lightgray',
          borderRadius: '24px',
        },
      }}
    >
      <ProductsList
        changeProductId={setSelectedProduct}
        openModal={onOpen}
      />
      <ProductModal isOpen={isOpen} onClose={onClose} product={selectedProduct} />
    </Box>
  </Flex>);
}

export default MainScreen;