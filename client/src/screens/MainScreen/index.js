import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex } from '@chakra-ui/layout';
import React, { useState } from 'react';
import AddProductForm from '../../components/AddProductForm';
import ProductModal from '../../components/ProductModal';
import ProductsList from '../../components/ProductsList';
import SideMenu from '../../components/SideMenu';


function MainScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [menuOption, setMenuOption] = useState("1");

  return (<Flex height="100vh" flexDirection="column" alignItems="center" paddingY={5} paddingX={20} >
    <Box w="sm" h="20" bg='yellowgreen'></Box>
    <Flex width="100%" height="70%" marginTop="auto">
      <SideMenu selected={menuOption} setSelected={setMenuOption} />
      <Box
        marginTop='auto'
        width="60%"
        height="100%"
        overflowY='auto'
        bg="gray.50"
        p={5}
        borderRadius={5}
        marginX="auto"
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
        {function () {
          if (menuOption === "1") {
            return <ProductsList
              changeProductId={setSelectedProduct}
              openModal={onOpen}
            />
          }
          if (menuOption === "3") {
            return <AddProductForm />
          }
        }()}
      </Box>
    </Flex>
    <ProductModal isOpen={isOpen} onClose={onClose} product={selectedProduct} />
  </Flex>);
}

export default MainScreen;