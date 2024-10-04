export type ContactInterface = {
    _id?: string;
    id: string;
    name: string;
    mail: string;
    phoneNumber: string;
};

export type ContactTableInterface = {
    data: any[];
    fetch: () => void;
    onEdit: (rowData: any) => void;
    onDelete: (rowData: any) => void;
  };