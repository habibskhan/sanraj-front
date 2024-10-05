import React, { useEffect, useState } from "react";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import "./contactus.scss";
import CommonCta from "../../components/commonCta/commonCta";
import http from "../../helpers/http";
import config from "../../config/config";
import Joi from "joi";
import { contactUsBanner, contactUsBannerMb } from "../../images";
import { useWindowSize } from "react-use";

const ContactUs = () => {
  const { width } = useWindowSize();
  const [globalData, setGlobalData] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [banner, setBanner] = useState("");
  const base_url = config.api_url;
  const image_url = config.image_url;

  const schema = Joi.object({
    name: Joi.string().required().label("Full Name"),
    email: Joi.string().required().label("Email"),
    phone: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .label("Phone Number"),
    subject: Joi.string().required().label("Subject"),
    message: Joi.string().required().label("Message"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const validateForm = () => {
    const result = schema.validate(formData, { abortEarly: false });

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    console.log(errors);

    setErrors(errors || {});
    if (errors) return;

    const { data } = await http.post(`${base_url}/contact-leads`, formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    if (data) {
      setFormSubmitted(true);
    }
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const renderAddress = (address) => {
    if (!address) return null;

    const chunkSize = 25;
    const parts = address.match(new RegExp(`.{1,${chunkSize}}`, "g"));

    return parts.map((part, index) => <p key={index}>{part}</p>);
  };

  const fetchGlobalData = async () => {
    const { data } = await http.get(`${base_url}/globals`);
    if (data) {
      setGlobalData(data[0]);
    }
  };

  const fetchBanner = async () => {
    const { data } = await http.get(`${base_url}/section-banners`);
    if (data) {
      const contactUsBanner = data.find((it) => it.section == "contact-us");
      setBanner(`${image_url}${contactUsBanner?.desktop_banner?.url}`);
    }
  };

  useEffect(() => {
    // fetchGlobalData();
    // fetchBanner();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <CommonBanner
        title={"Contact Us"}
        banner={width > 767 ? contactUsBanner : contactUsBannerMb}
        linkText1={"Contact Us"}
      />

      <div className="my_container">
        <div className="contact-container">
          <div className="contact-info">
            <h2>GET IN TOUCH</h2>
            <div className="info-item">
              <div className="info-img-container">
                <img src="/icons/contact-us/address.svg" alt="Location icon" />
              </div>
              <div>
                <p className="info-title">Address</p>
                {/* {renderAddress(globalData?.address)} */}
                {/* <p>{globalData?.address}</p> */}
                {/* <p>Malad(West), Mumbai - 400 064, India</p> */}
                <p>
                  4th Dimension, 3rd Floor, Mind Space, <br /> Malad(West),
                  Mumbai - 400 064, India
                </p>
                <p>
                  <a
                    href="https://maps.app.goo.gl/Y1ZoRrcsMVPDZJTXA"
                    target="_blank"
                    rel="noreferrer"
                    className="direction-link"
                  >
                    Get Directions
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-img-container">
                <img src="/icons/contact-us/email.svg" alt="Email icon" />
              </div>

              <div>
                <p className="info-title">Email</p>
                <p>
                  <a href="mailto:info@sanraj.co.in">info@sanraj.co.in</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-img-container">
                <img src="/icons/contact-us/phone.svg" alt="Phone icon" />
              </div>

              <div>
                <p className="info-title">Phone Number</p>
                <p>
                  <a href="tel:+918828042886">8828042886</a>
                </p>
              </div>
            </div>
          </div>
          <div className="enquiry-form">
            <h2>ENQUIRE NOW</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input_wrapper">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name*"
                    value={formData.name}
                    onChange={handleChange}
                    // required
                  />
                  {errors.name && <p className="error_text">{errors.name}</p>}
                </div>
                <div className="input_wrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    // required
                  />
                  {errors.email && <p className="error_text">{errors.email}</p>}
                </div>
              </div>
              <div className="form-row">
                <div className="input_wrapper">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No.*"
                    value={formData.phone}
                    onChange={handleChange}
                    // required
                  />
                  {errors.phone && <p className="error_text">{errors.phone}</p>}
                </div>
                <div className="input_wrapper">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    value={formData.subject}
                    onChange={handleChange}
                    // required
                  />
                  {errors.subject && (
                    <p className="error_text">{errors.subject}</p>
                  )}
                </div>
              </div>
              <div className="msg_wrapper">
                <textarea
                  name="message"
                  placeholder="Message*"
                  rows={1}
                  cols={1}
                  value={formData.message}
                  onChange={handleChange}
                  // required
                ></textarea>
                {formSubmitted && Object.keys(errors).length === 0 && (
                  <p className="success_text">
                    Thanks for reaching out to us. We’ll review your query and
                    reply as soon as possible.
                  </p>
                )}
                {errors.message && (
                  <p className="error_text">{errors.message}</p>
                )}
              </div>
              {/* <button type="submit" className="submit-btn">
                                Submit <span>&rarr;</span>
                            </button> */}
              <div className="submit-btn">
                <CommonCta linkText="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
