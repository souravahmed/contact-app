import React from "react";
import { addContact } from "../../redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const contact = {
      name: event.target.name.value,
      email: event.target.email.value,
      company: event.target.company.value,
      description: event.target.description.value,
    };
    dispatch(addContact(contact));
    navigate("/contacts");
  };

  return (
    <div className="d-flex-column mt-5 w-50">
      <h1 className="mb-20">Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <label className="form-label">
            Name <span className="text-danger fs-4">*</span>
          </label>
          <input
            className="form-control border border-dark border-1 rounded"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="mt-2 ">
          <label className="form-label">
            Email <span className="text-danger fs-4">*</span>
          </label>
          <input
            className="form-control border border-dark border-1 rounded"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="mt-2 ">
          <label className="form-label">
            Company <span className="text-danger fs-4">*</span>
          </label>
          <input
            className="form-control border border-dark border-1 rounded"
            type="text"
            name="company"
            required
          />
        </div>
        <div className="mt-2 ">
          <label className="form-label">
            Description <span className="text-danger fs-4">*</span>
          </label>
          <textarea
            className="form-control border border-dark border-1 rounded"
            name="description"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-dark mt-3"
          style={{
            minWidth: "190px",
            fontSize: "14px",
            padding: "0 2em",
            lineHeight: "2.72",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
