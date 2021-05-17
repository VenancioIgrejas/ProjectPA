import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

function ProvidersList() {
  const [providers, setProviders] = useState([]);


  async function fetchProviders() {
    try {
      const response = await api.get('/provider');
      setProviders(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchProviders();
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
          <Th css={customCSS}>Celular</Th>
          <Th css={customCSS}>Informações</Th>
          <Th css={customCSS}>Porcentagem</Th>
        </Tr>
      </Thead>
      <Tbody>
        {providers.map((product) => <Tr key={product.id} >
          <Td >{product.name}</Td>
          <Td>{product.cel}</Td>
          <Td >{product.info}</Td>
          <Td >{String(product.per_price * 100) + "%"}</Td>
        </Tr>)}
      </Tbody>
    </Table>
  );
}

export default ProvidersList;