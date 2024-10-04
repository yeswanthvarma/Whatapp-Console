import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import CustomTable from '../components/CustomTable';
import useCampagin from '../useHooks/UseCampagin';

const Dasboard: React.FC = () => {
   /*------------------------  UseHook----------------------------*/
  const { campagin } = useCampagin();
  /*--------------- Column Data For Contact Table------------------*/
  const columns = [
    { field: 'campaign', header: 'Campagin' },
    { field: 'template', header: 'Template' },
    { field: 'heading', header: 'Heading' },
    { field: 'action', header: 'Action', isAction: true },
  ];

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mx-2 my-4">
        <h4 className="card-title d-flex align-items-center">
          <i className="pi pi-address-book me-2" aria-hidden="true"></i>
          Campagins List
        </h4>
      </div>
      <div className="card custom-card mb-4">
        <div className="card-body">
        { /*------------------------ CustomTable----------------------------*/}
          <CustomTable columns={columns} data={campagin} />
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
