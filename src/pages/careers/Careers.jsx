import React, { useEffect, useState } from "react";
import "./careers.scss";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import CommonCta from "../../components/commonCta/commonCta";
import Joi from "joi";
import http from "../../helpers/http";
import config from "../../config/config";
import { careersBanner, careersBannerMb } from "../../images";
import { useWindowSize } from "react-use";

const Careers = () => {
  const { width } = useWindowSize();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    current_designation: "",
    expected_salary: "",
    current_salary: "",
    resume: null,
    cover_letter: null,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const base_url = config.api_url;

  const schema = Joi.object({
    name: Joi.string().required().label("Full Name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    phone: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .label("Phone No"),
    current_designation: Joi.string().required().label("Current Designation"),
    expected_salary: Joi.string().required().label("Expected Salary"),
    current_salary: Joi.string().required().label("Current Salary"),
    resume: Joi.object().required().label("Resume"),
    cover_letter: Joi.object().required().label("Cover Letter"),
    message: Joi.string().required().label("Message"),
  });

  const validateForm = () => {
    const { error } = schema.validate(formData, { abortEarly: false });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      if (file && file.type === "application/pdf") {
        setFormData((prev) => ({ ...prev, [name]: file }));
        setErrors((prev) => ({ ...prev, [name]: null }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [name]: "Please upload a PDF file",
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    const { data } = await http.post(
      `${base_url}/career-leads`,
      formDataToSend
    );

    if (data) {
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        current_designation: "",
        expected_salary: "",
        current_salary: "",
        resume: "",
        cover_letter: "",
        message: "",
      });
    }

    console.log("Form submitted:", formData);
  };

  const renderInput = (name, placeholder, type = "text") => (
    <>
      <div className="input_wrapper">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          // required
        />
        {errors[name] && <p className="error_text">{errors[name]}</p>}
      </div>
    </>
  );

  const renderFileInput = (name, label) => (
    <>
      <div className="file-input">
        <input
          type="file"
          name={name}
          id={name}
          onChange={handleChange}
          // required
          accept=".pdf"
        />
        <label htmlFor={name}>
          {formData[name] ? formData[name].name : label}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </label>
        {errors[name] && <p className="error_text">{errors[name]}</p>}
      </div>
    </>
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <CommonBanner
        title={"Careers"}
        banner={width > 767 ? careersBanner : careersBannerMb}
        linkText1={"Careers"}
      />

      <div className="my_container">
        <div className="careers">
          <h1>CAREERS</h1>

          <div className="careers-content">
            <p className="description">
              Craft a career as distinctive as you are. With our global reach,
              personalized support, inclusive culture, and advanced technology,
              we'll empower you to achieve your fullest potential.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                {renderInput("name", "Full Name*")}
                {renderInput("email", "Email*", "email")}
                {renderInput("phone", "Phone No*", "tel")}
                {renderInput("current_designation", "Current Designation*")}
                {renderInput("expected_salary", "Expected Salary*")}
                {renderInput("current_salary", "Current Salary*")}
                {renderFileInput("resume", "Upload Resume*")}
                {renderFileInput("cover_letter", "Upload Cover Letter*")}
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
                />
                {formSubmitted && (
                  <p className="success_text">
                    Thank You for Your Interest! Our team will review it and get
                    in touch with you shortly.
                  </p>
                )}
                {errors.message && (
                  <p className="error_text">{errors.message}</p>
                )}
              </div>
              <div className="submit-btn">
                <CommonCta linkText="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
