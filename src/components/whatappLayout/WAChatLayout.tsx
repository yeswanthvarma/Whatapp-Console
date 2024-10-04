/*------------------------ Whatapp Dynami Massage Layout ----------------------------*/
import React from 'react';
import MessageCard from './WAMassageCard';
import '../../styles/WAChatLayout.scss';
import Logo from '../../assets/images/Logo.png';
import { WhatsAppLayoutProps } from '../../libs/interfaces/Component';
const WhatsAppDynamicMessage: React.FC<WhatsAppLayoutProps> = ({formData}) => {
    return (
        <div className="whatsapp-chat-layout">
            <div className="chat-header">
                <div className="user-info">
                    <img src={Logo} alt="User Avatar" className="user-avatar" />
                    <div className="user-details">
                        <h4>S1th</h4>
                        <span>online</span>
                    </div>
                </div>
                <div className="chat-actions">
                    <i className="fa fa-phone"></i>
                    <i className="fa fa-video"></i>
                    <i className="fa fa-ellipsis-v"></i>
                </div>
            </div>
            <div className="chat-messages">
            {/*------------------------ Massage Card ----------------------------*/}
                <MessageCard
                    template={formData.template}
                    heading={formData.heading}
                    longText={formData.longText}
                    image={formData.image}
                    sender='You'
                    time='10:00 AM' 
                />
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type a message" className="message-input" />
                <button className="send-btn">
                    <i className="fa fa-paper-plane">Send</i>
                </button>
            </div>
        </div>
    );
};
export default WhatsAppDynamicMessage;
