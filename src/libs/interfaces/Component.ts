import { CampaginInterface } from "./Campagin";
import { ContactInterface } from "./Contact";

export type CustomTableProps = {
    columns: Array<{ field: string; header: string; isAction?: boolean }>;
    data:any;
    onEdit?: (rowData: any) => void;
    onDelete?: (rowData: any) => void;
};

export type FormCardProps = {
    formData:ContactInterface,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    visible: boolean;
    setIsFormVisible: (value: boolean) => void;
    onCreate: (data: ContactInterface) => void;
    type:string;
};

export interface WhatsAppLayoutProps {
    formData: CampaginInterface
}

export interface MessageCardProps {
    template: string;
    heading: string;
    longText: string;
    image: File | null;
    sender: string;
    time: string;
}

export interface MassageTemplateProps {
    campaign: string;
    template: string;
    heading: string;
    longText: string;
    image: File | null;
  }

