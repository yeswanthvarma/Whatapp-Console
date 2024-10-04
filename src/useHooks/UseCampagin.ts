/*------------------Hook For Getting Contact List----------------------------*/
import { useState, useEffect } from 'react';
import { getCampagins } from '../libs/api\'s/Campagin';
import { CampaginInterface } from '../libs/interfaces/Campagin';
const useCampagin = () => {
  const [campagin, setCampagin] = useState<CampaginInterface[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fetchContacts = async () => {
    try {
      const data = await getCampagins();
      setCampagin(data);
    } catch (err) {
      setError('Failed to fetch Campagins');
    } 
  };
  useEffect(() => {
    fetchContacts();
  }, []);
  return { campagin, error, refetch: fetchContacts };
};
export default useCampagin;
