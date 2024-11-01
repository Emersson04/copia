// src/components/organisms/TableVariedades.jsx
import React, { useEffect } from 'react';
import { Button, Switch } from '@nextui-org/react';
import { useModal } from '../../context/ModalContext';
import PaginatedTable from './PaginatedTable';
import VariedadForm from '../molecules/VariedadForm';
import VariedadFormUpdate from '../molecules/VariedadFormUpdate';
import { useToggleVariedad } from '../../hooks/useToggleVariedad';
import { useTable } from '../../context/TableContext';

// en este componente se va enviar los datos para crear la tabla
// {data} tiene los datos que le pasamos desde el contexto
const TableVariedades = ({ data }) => {

  const { openModal, setTitle } = useModal();
  const { refreshVariedades } = useTable();
  const { activateVariedad, deactivateVariedad } = useToggleVariedad();

  useEffect(()=> {
    refreshVariedades()
  })


  const handleOpenModal = () => {
    openModal(<VariedadForm />);
    setTitle("Registrar Variedad")
  };


  const handleOpenUpdateModal = (row) => {
    openModal(<VariedadFormUpdate row={row} />);
    setTitle("Actualizar Variedad")
  };

  
  const handleToggle = async (id, estado) => {
    if (estado === 'activo') {
      await deactivateVariedad(id);
    } else {
      await activateVariedad(id);
    }
    await refreshVariedades();
  };

  // columnas que van a ir en la parte superior de la tabla
  const columns = ["CODIGO", "NOMBRE", "ESTADO", "ACCIONES"];

  return (
    <>
    {/* boton que accione el modal de registar variedad */}
      <div className='my-2'>
        <Button onPress={handleOpenModal}>Registrar Variedad</Button>
      </div>

{/* componente que crea la tabla pasandole columnas y datos */}
      <PaginatedTable
        columns={columns}
        data={data.map(row => ({
          ...row,
          acciones: (
            <div className="flex gap-2">

              {/* togle que se encarga de cambiar el estado de una variedad */}
              <Switch
              size='sm'
              defaultSelected={row.estado === 'activo'}
                onChange={() => handleToggle(row.codigo, row.estado)}
              />
              <Button size="sm" onPress={() => handleOpenUpdateModal(row)}>
                Editar
              </Button>
            </div>
          )
        }))}


        searchProperty="nombre"
      />
    </>
  );
};

export default TableVariedades;
