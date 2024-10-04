import axios from "axios";
import { ContactInterface } from "../interfaces/Contact";
/*------------------------ Api for Fetching Contacts ----------------------------*/
export const getContacts = async () => {
    try {
        const response = await axios.get('http://localhost:3002/contacts');
        return response.data;
    } catch (error) {
        console.error('Error fetching contacts:', error);
    }
};
/*------------------------ Api for Create Contacts ----------------------------*/
export const CreateContact = async (data: ContactInterface ) => {
    try {
      const response = await axios.post('http://localhost:3002/contacts/create', data); 
      console.log('New Capagin Created:',response.status);
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };
  /*------------------------ Api for Update Contacts ----------------------------*/
  export const UpdateContacts = async(data: ContactInterface ) => {
    try {
      console.log(data);
      const response = await axios.put(`http://localhost:3002/contacts/update/${data._id}`,data);
      console.log(response.data.message);
      getContacts();
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };
  /*------------------------ Api for Delete Contacts ----------------------------*/
 export const DeleteContacts = async(id: any) => {
    try {
      const response = await axios.delete(`http://localhost:3002/contacts/delete/${id}`);
      console.log(response.data.message);
      getContacts();
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };