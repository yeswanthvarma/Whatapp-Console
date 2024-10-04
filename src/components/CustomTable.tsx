/*------------------------ Custom Table for CONTACTS and CAMPAGINS ----------------------------*/
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { SingleTick, DoubleTick } from './icons/WhatappStatusIcons';
import { CustomTableProps } from '../libs/interfaces/Component';

const CustomTable: React.FC<CustomTableProps> = ({ columns, data, onEdit, onDelete }) => {
  /*------------------------ Action Buttons for Whatapp Massage Status ----------------------------*/
  const actionBodyTemplate = (rowData: any) => (
    <div>
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success me-2" onClick={() => onEdit?.(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => onDelete?.(rowData)} />
    </div>
  );
/*------------------------ Action Buttons for Delete, Edit ----------------------------*/
  const statusActionTemplate = (rowData: any) => (
    <div>
      {rowData.status !== "delivered" && (
        <SingleTick className="text-secondary me-3" />
      )}
      {rowData.status !== "seen" && (
         <DoubleTick className="text-success mx-3"  />
      )}
    </div>
  );

  return (
    <div className="card custom-card">
      {/*------------------------ Table for Contact ----------------------------*/}
      <DataTable value={data} paginator rows={10} className="p-datatable-custom">
        {columns.map((col, index) => (
          <Column
            key={index}
            field={col.field}
            header={col.header}
            body={col.isAction ? onDelete? actionBodyTemplate : statusActionTemplate : undefined}
            filter={!col.isAction} 
          />
        ))}
      </DataTable>
    </div>
  );
};
export default CustomTable;
