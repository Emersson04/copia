// src/components/organisms/ModalProviderComponent.jsx
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import { ModalProvider, useModal } from '../../context/ModalContext';

const GlobalModal = () => {

  const { isOpen, modalContent, closeModal, title } = useModal();


  return (
    <Modal isOpen={isOpen} onOpenChange={closeModal}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              {modalContent}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const ModalProviderComponent = ({ children }) => {
  return (
    <ModalProvider>
      {children}
      <GlobalModal />
    </ModalProvider>
  );
};

export default ModalProviderComponent;
