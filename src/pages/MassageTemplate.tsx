import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/MassageTemplate.scss' // Import SCSS styles
import WhatsAppDynamicMessage from '../components/whatappLayout/WAChatLayout';
import { createCampagin } from '../libs/api\'s/Campagin';
import { MassageTemplateProps } from '../libs/interfaces/Component';



const MessageTemplates: React.FC = () => {
  /*------------------------  UseHook ----------------------------*/
  const [formData, setFormData] = useState<MassageTemplateProps>({
    campaign: '',
    template: '',
    heading: '',
    longText: '',
    image: null,
  });
  /*------------------------ handleChange ----------------------------*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevState: any) => ({ ...prevState, [id]: value }));
  };
  /*------------------------ Create Campagin ----------------------------*/
  const handleCreate = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('campaign', formData.campaign);
      formDataToSend.append('template', formData.template);
      formDataToSend.append('heading', formData.heading);
      formDataToSend.append('longText', formData.longText);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }
      createCampagin(formDataToSend)
      setFormData({ campaign: '', template: '', heading: '', longText: '', image: null, })
    } catch (error) {
      console.error('Error creating Capagin:', error);
    }
  };
  /*------------------------ Upload Image ----------------------------*/
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      console.log('Uploaded Image:', file);
    }
  };


  return (
    <div className="message-templates container-fluid d-flex">
      {/*------------------------ Form Data For Campagin -----------------------*/}
      <div className="form-section col-12 col-md-6 m-3">
        <h3 className="mb-4">Create Message Template</h3>
         {/*------------------------ Campagin Name ----------------------------*/}
        <div className="mb-2">
          <label htmlFor="campaign" className="form-label">Campaign Name</label>
          <input
            id="campaign"
            type="text"
            className="form-control"
            value={formData.campaign}
            onChange={handleChange}
          />
        </div>
        {/*------------------------ Template Name ----------------------------*/}
        <div className="mb-3">
          <label htmlFor="template" className="form-label">Select Template</label>
          <select id="template" className="form-select" value={formData.template} onChange={handleChange}>
            <option value="">Select Option</option>
            <option value="text">Text</option>
            <option value="image_text">Image - Text</option>
            <option value="hello_world">Hello World</option>
            <option value="heading_text">Heading - Text</option>

          </select>
        </div>
        {/*------------------------ Heading Massage ----------------------------*/}
        {formData.template === "heading_text" && (
          <div className="mb-2">
            <label htmlFor="heading" className="form-label">Heading</label>
            <input
              id="heading"
              type="text"
              className="form-control"
              value={formData.heading}
              onChange={handleChange}
            />
          </div>
        )}
        {/*------------------------------- Image-----------------------------------*/}
        {/* {formData.template === "Image-Text" && (
          <div className="mb-3">
            <label htmlFor="uploadImage" className="form-label">Upload Image</label>
            <input id="uploadImage" type="file" className="form-control" onChange={handleImageUpload} />
          </div>
        )} */}
        {/*--------------------------- Text Massage --------------------------------*/}
        {formData.template !== "hello_world" && (
          <div className="mb-2">
            <label htmlFor="longText" className="form-label">Long Text</label>
            <textarea
              id="longText"
              className="form-control"
              rows={4}
              value={formData.longText}
              onChange={handleChange}
            ></textarea>
          </div>
        )}
        {/*---------------------------- Create Campagin -------------------------------*/}
        <button className="btn btn-primary w-100" onClick={handleCreate}>
          Send Message
        </button>
      </div>
      {/*------------------------ Whatapp Dynamic Massage Templates ----------------------------*/}
      <div className="message-preview-section col-12 col-md-6 d-flex justify-content-center align-items-center">
        <WhatsAppDynamicMessage formData={formData} />
      </div>
    </div>
  );
};

export default MessageTemplates;
