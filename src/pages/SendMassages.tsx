import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SendMassages.scss'; 
const SendMessages: React.FC = () => {
    return (
        <div className="col-12 col-md-10 mx-auto ">
            <h2 className=" mb-4">Send a message</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium.</p>
            <form>
                <div className="mb-4 row">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="col-md-6">
                        <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                </div>
                <div className="mb-4 row">
                    <div className="col-md-6">
                        <input type="tel" className="form-control" placeholder="Phone" required />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Subject" required />
                    </div>
                </div>
                <div className="mb-4">
                    <textarea className="form-control" rows={4} placeholder="Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Submit Message</button>
            </form>
        </div>
    );
};

export default SendMessages;
