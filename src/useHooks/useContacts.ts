/*------------------Hook For Getting Campagin List----------------------------*/
import { useState, useEffect } from 'react';
import { getContacts } from '../libs/api\'s/Contact';
import { ContactInterface } from '../libs/interfaces/Contact';

const useContacts = () => {
  const [contacts, setContacts] = useState<ContactInterface[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (err) {
      setError('Failed to fetch contacts');
    } 
  };
  useEffect(() => {
    fetchContacts();
  }, []);
  return { contacts, error, refetch: fetchContacts };
};

export default useContacts;
