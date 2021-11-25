import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import LinkButton from "../../components/LinkButton";
import SearchBox from "../../components/SearchBox";
import { fetchContacts } from "../../redux/contact/contactAction";
import generatePDF from "../../utils/pdfGeneratorUtil";

const HomePage = () => {
  const contactState = useSelector((state) => state.contact);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  let contacts = [];

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  contacts = contactState?.contacts?.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleExportAsPdf = () => {
    generatePDF(contactState.contacts);
  };

  return (
    <div className="card m-5">
      <div className="card-header">
        Total contacts: {contactState?.contacts?.length}
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <SearchBox handleSearch={handleSearch} />
          </div>
          <div className="col-md-4">
            <LinkButton
              path="/add"
              btnClasses="btn btn-md btn-success"
              text="Add"
              iconClass="fas fa-plus"
            ></LinkButton>
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary" onClick={handleExportAsPdf}>
              Export as pdf
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Company</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((each) => (
                  <tr key={each.id}>
                    <th scope="row">{each.id}</th>
                    <td>{each.name}</td>
                    <td>{each.email}</td>
                    <td>{each.company}</td>
                    <td>{each.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
