import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import React from 'react';

// import { Container } from './styles';

function ProductModal({ isOpen, onClose, product }) {
  return <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        {product.name}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {product.comment}
      </ModalBody>
    </ModalContent>
  </Modal>;
}

export default ProductModal;