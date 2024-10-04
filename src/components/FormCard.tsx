/*------------------------  Forms for Contacts to Create and Edit ----------------------------*/
import React  from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormCardProps } from '../libs/interfaces/Component';
import { UpdateContacts } from '../libs/api\'s/Contact';

const FormCard: React.FC<FormCardProps> = ({ formData, handleChange, visible, setIsFormVisible, onCreate, type }) => {
  /*------------------------ Create and Edit the Campagins ----------------------------*/
  const handleSubmit = async () => {
    try {
      if (type === "create") {
        onCreate(formData);
        // setIsFormVisible(false);
        // setFormData({ id:'', name: '', mail: '', phoneNumber: ''}); 
      }else if (type === "edit"){
        UpdateContacts(formData);
      } 
      window.location.reload()
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  return (
    <Dialog
      header="Create Contact"
      visible={visible}
      style={{ width: '30vw' }}
      modal
      onHide={() => setIsFormVisible(false)}
      className="form-card-dialog"
    >
      <div className="form-group mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <InputText
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="mail" className="form-label">Email</label>
        <InputText
          id="mail"
          value={formData.mail}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <InputText
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="text-end">
        <Button
          label="Create"
          icon="pi pi-check"
          onClick={handleSubmit}
          className="p-button-success"
        />
      </div>
    </Dialog>
  );
};

export default FormCard;
