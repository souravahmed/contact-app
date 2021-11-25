import React from "react";
import { addContact } from "../../redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LinkButton from "../../components/LinkButton";

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
      <h2 className="text-center">Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-2 border border-dark border-3 rounded">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div className="mt-2 border border-dark border-3 rounded">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div className="mt-2 border border-dark border-3 rounded">
          <input
            className="form-control"
            type="text"
            placeholder="Company"
            name="company"
            required
          />
        </div>
        <div className="mt-2 border border-dark border-3 rounded">
          <textarea
            className="form-control"
            placeholder="Description"
            name="description"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-dark mt-3">
          Submit
        </button>
        <LinkButton
          path="/contacts"
          btnClasses="btn btn-md btn-success ms-3 mt-3"
          text="Back"
          iconClass="fas fa-long-arrow-alt-left"
        ></LinkButton>
      </form>
    </div>
  );
};

export default ContactPage;
