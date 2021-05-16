import { Text } from '@chakra-ui/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

function ProductsList({ changeProductId, openModal }) {
  const [products, setProducts] = useState([]);

  const openProductModal = (product) => {
    changeProductId(product);
    openModal();
  }

  async function fetchProducts() {
    try {
      const response = await api.get('/products/');
      setProducts(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  const customCSS = {
    background: 'white',
    position: 'sticky',
    top: 0,
  }

  return (
    <Table >
      <Thead >
        <Tr>
          <Th css={customCSS}>Nome</Th>
          <Th css={customCSS}>Descrição</Th>
          <Th css={customCSS}>Preço</Th>
          <Th css={customCSS}>Data</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products.map((product) => <Tr key={product.id} >
          <Td color="purple">
            <Text textDecoration="underline" _hover={{ cursor: "pointer" }} onClick={() => openProductModal(product)}>{product.name}</Text>
          </Td>
          <Td>{product.comment}</Td>
          <Td isNumeric>{product.price}</Td>
          <Td isNumeric>{product.date_in}</Td>
        </Tr>)}
      </Tbody>
    </Table>
  );
}

export default ProductsList;