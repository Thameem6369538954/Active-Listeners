import React, { useState } from "react";
import "./HiringAdmin.css";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import { FaEye } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import FilterAdmin from "./adminHiringImages/FilterAdmin.png";
function HiringAdmin() {
  // const [selectedFilter, setSelectedFilter] = useState("Date");

  // const handleFilterChange = (event) => {
  //   setSelectedFilter(event.target.value);
  //   // You can add logic here to handle the selected filter change
  // };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <div className="hiring-admin">
        <h1>HIRING</h1>
        <Button variant="warning">Download Report</Button>{' '}
          </div>

      <div className="filtering-hiring">
        <div className="filter-contents">
          <div className="filter-image">
            <img src={FilterAdmin} alt="Filter Icon" />
          </div>

          {/* <ul className="contents-list"> */}
          {/* <li>Date</li>
            <li>Status</li>
          <li>Position</li> */}
          {/* </ul> */}


          <div className="contents-list">
          <p>Filter By</p>
          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Status
            </Dropdown.Toggle>

            <Dropdown.Menu>

              <Dropdown.Item value="applied">Applied</Dropdown.Item>
              <Dropdown.Item value="interviewed">Interviewed</Dropdown.Item>
              <Dropdown.Item value="rejected">Rejected</Dropdown.Item>
              <Dropdown.Item value="hired">Hired</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>




          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Applied Position
            </Dropdown.Toggle>

            <Dropdown.Menu>

              <Dropdown.Item value="applied">Backend developer</Dropdown.Item>
              <Dropdown.Item value="interviewed">Frontend developer</Dropdown.Item>
              <Dropdown.Item value="rejected">Illustrator</Dropdown.Item>
              <Dropdown.Item value="hired">Sketch Artist</Dropdown.Item>
              <Dropdown.Item value="hired">Video Editor</Dropdown.Item>


            </Dropdown.Menu>
          </Dropdown>
          </div>
        </div>
      </div>

      <br />

      <div className="hiring-table">
        <Table responsive>
          <thead style={{ height: "59px" }}>
            <tr>
              <th>#</th>

              {/* <th >ID</th> */}
              <th>Applicant Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Applied position</th>
              <th>Date</th>
              <th>Resume</th>
              <th>Cover letter</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "59px" }}>
              <td>1</td>

              <td>Aleeshya</td>
              <td>aleeshya@gmail.com</td>
              <td>8593020457</td>
              <td>backend developer</td>
              <td>5/4/2024</td>
              <td>resume.pdf</td>
              <td>backend developer</td>
              <td><div className="bg-success p-2 text-success bg-opacity-25">
                Hired</div>
              </td>
              <th><button onClick={handleShow}><FaEye/></button></th>

            </tr>
            <tr style={{ height: "59px" }}>
              <td>2</td>

              <td>Thameem</td>
              <td>thameem@gmail.com</td>
              <td>9593020452</td>
              <td>Frontend developer</td>
              <td>5/4/2024</td>
              <td>resumeThameem.pdf</td>
              <td>React.js developer</td>
              <td><div className="bg-warning p-2 text-warning bg-opacity-25">
                Applied</div>
              </td>
              <th><button onClick={handleShow}><FaEye/></button></th>

            </tr>
            <tr style={{ height: "59px" }}>
              <td>3</td>

              <td>Sankar</td>
              <td>sankar@gmail.com</td>
              <td>7683020457</td>
              <td>Illustrator</td>
              <td>4/4/2024</td>
              <td>resumeSankar.pdf</td>
              <td>Passionate illustrator</td>
              <td><div className="bg-danger p-2 text-danger bg-opacity-25">
                Rejected</div>
              </td>
              <th><button onClick={handleShow}><FaEye/></button></th>

            </tr>
          </tbody>
        </Table>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Hiring Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="status-buttons">

          <Button variant="success">Hired</Button>{' '}
      <Button variant="warning">Interviewed</Button>{' '}
      <Button variant="danger">Rejected</Button>{' '}
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
}

export default HiringAdmin;
