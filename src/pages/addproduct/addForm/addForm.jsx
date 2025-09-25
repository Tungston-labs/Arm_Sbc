import React from 'react';
import { AddContainer, Header, Text } from '../addProduct.styled';
import { TopBar } from './addForm.styled';
import { IoMdArrowRoundBack } from "react-icons/io";

const AddForm = () => {
  return (
    <AddContainer>
      <TopBar>
        <IoMdArrowRoundBack size={28} color="#fff" />
        <Header>Add Product</Header>
      </TopBar>

      <Text>
        Enter new products fast and accurately. Stay on top of your inventory.
      </Text>
      
    </AddContainer>
  );
};

export default AddForm;
