import React from 'react';
import { AuthProvider } from '../../context/AuthContext';
import { TableProvider } from '../../context/TableContext';
import { SidebarProvider } from '../../context/SidebarContext';
import ModalProviderComponent from '../organisms/ModalProviderComponent';

export const ProviderContext = ({ children }) => {
  return (
    <AuthProvider>
      <SidebarProvider>
        <TableProvider>
          <ModalProviderComponent>
            {children}
          </ModalProviderComponent>
        </TableProvider>
      </SidebarProvider>
    </AuthProvider>
  );
};
