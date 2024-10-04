/*------------------------ Massage Card ----------------------------*/
import React from 'react';
import Logo from "../../assets/images/Logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { MessageCardProps } from '../../libs/interfaces/Component';

const MessageCard: React.FC<MessageCardProps> = ({ template, heading, longText, sender, time, image }) => {
    return (
        <div className="message-card receiver">
            <div className="message-content">
                {template === 'image_text' ? (
                    <>
                        <img
                            src={Logo}
                            alt="User Avatar"
                            className="img-fluid rounded-circle mr-3 mb-2"
                            style={{ width: '150px', height: '150px' }}
                        />
                    </>
                ) : (
                    <><strong style={{ width: '150px' }}>{heading}</strong></>
                )}

                <p className="message-text">{longText}</p>
            </div>

            <div className="message-info">
                <span className="sender-name">{sender}</span>
                <span className="message-time">{time}</span>
            </div>
        </div >
    );
};

export default MessageCard;
