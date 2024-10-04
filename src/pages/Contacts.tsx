import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'primereact/button';
import CustomTable from '../components/CustomTable';
import { CreateContact, DeleteContacts } from '../libs/api\'s/Contact';
import useContacts from '../useHooks/useContacts';
import FormCard from '../components/FormCard';
import { ContactInterface } from '../libs/interfaces/Contact';

const Contacts: React.FC = () => {
  /*------------------------  UseHook----------------------------*/
  const { contacts, error} = useContacts();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [type, setType]= useState<string>('create')
  const [formData, setFormData] = useState<ContactInterface>({
    id:"id" + Math.random().toString(16).slice(2),
    name: '',
    mail: '',
    phoneNumber: '',
  });
/*--------------- Column Data For Contact Table---------------------*/
  const columns = [
    { field: 'name', header: 'Name' },
    { field: 'phoneNumber', header: 'PhoneNumber' },
    { field: 'mail', header: 'Email' },
    { field: 'action', header: 'Action', isAction: true },
  ];
   /*------------------------ Delete Contact-------------------------*/
  const handleDelete = async (rowData: any) => {
    try {
      DeleteContacts(rowData._id)
      // refetch();
      window.location.reload();
    } catch (e) {
      console.log(error);
      console.error('Error in delete contacts:', error);
    }
  };
  /*------------------------ Edit Contact----------------------------*/
  const handleEdit = (rowData: ContactInterface) => {
    try {
      setFormData(rowData);
      setType("edit");
      setIsFormVisible(true);
    } catch (e) {
      console.log(error);
      console.error('Error in Updating contacts:', error);
    }
  };
  /*------------------------ handleChange----------------------------*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevState: any) => ({ ...prevState, [id]: value }));
  };
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mx-2 my-4">
        <h4 className="card-title d-flex align-items-center">
          <i className="pi pi-address-book me-2" aria-hidden="true"></i>
          Contact Lists
        </h4>
        { /*------------------------ Create Contacts----------------------*/}
        <Button
          label="Create"
          icon="pi pi-plus"
          className="p-button-rounded p-button-info p-button-outlined create-button"
          onClick={()=>setIsFormVisible(true)}
        />
      </div>
      <div className="card custom-card mb-4">
      { /*------------------------ CustomTable----------------------------*/}
        <div className="card-body">
          <CustomTable columns={columns} data={contacts} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      { /*------------------------ Form Card----------------------------*/}
        <FormCard visible={isFormVisible} setIsFormVisible={setIsFormVisible} onCreate={CreateContact} handleChange={handleChange} formData={formData} type={type}/>
      </div>
    </div>


  );
};

export default Contacts;
