import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex } from '@chakra-ui/layout';
import React, { useState } from 'react';
import AddCategoryForm from '../../components/AddCategoryForm';
import AddProductForm from '../../components/AddProductForm';
import AddProviderForm from '../../components/AddProviderForm';
import ProductModal from '../../components/ProductModal';
import ProductsList from '../../components/ProductsList';
import ProvidersList from '../../components/ProvidersList';
import SideMenu from '../../components/SideMenu';
import Navbar from 'react-bootstrap/Navbar';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"


function MainScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logIsOpen, logOnOpen, logOnClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [menuOption, setMenuOption] = useState("Lista de vendas");
  const [userId, setUserId] = useState(1);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {' '}
          Breshow
        </Navbar.Brand>
      </Navbar>
      <Flex height="90vh" flexDirection="column" alignItems="center" paddingX={10} >
        <Flex width="100%" height="90%" marginTop="auto">
          <SideMenu selected={menuOption} setSelected={setMenuOption} />
          <Box
            marginTop='auto'
            width="65%"
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
              if (menuOption === "Lista de vendas") {
                return <ProductsList
                  changeProductId={setSelectedProduct}
                  openModal={onOpen}
                />
              }
              if (menuOption === "Registrar venda") {
                return <AddProductForm userId={userId} />
              }
              if (menuOption === "Adicionar fornecedor") {
                return <AddProviderForm userId={userId} />
              }
              if (menuOption === "Lista de fornecedores") {
                return <ProvidersList />
              }
              if (menuOption === "Adicionar categoria") {
                return <AddCategoryForm userId={userId} />
              }
            }()}
          </Box>
        </Flex>
        <ProductModal isOpen={isOpen} onClose={onClose} product={selectedProduct} />
        <Modal onClose={logOnClose} size='sm' isOpen={true}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              Por favor, faça login
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </>);
}

export default MainScreen;