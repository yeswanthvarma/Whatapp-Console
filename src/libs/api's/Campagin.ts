import axios from "axios";
/*------------------------ Api for Fetching Campagin ----------------------------*/
export const getCampagins = async () => {
  try {
    const response = await axios.get('http://localhost:3002/campagins');
    return response.data
  } catch (error) {
    console.error('Error fetching contacts:', error);
  }
};
/*------------------------ Api for createing Campagin ----------------------------*/
export const createCampagin = async(data : FormData) => {
  try {
    // Make an API call to the server to create the new contact
    const response = await axios.post('http://localhost:3002/campagins/create', data);
    console.log('Contact Created:', response.data);

  } catch (error) {
    console.error('Error creating contact:', error);
  }
  console.log('Message Sent with Data:', data);
};