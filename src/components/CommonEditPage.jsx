import React from "react";
import {DatePicker,Button,Upload} from "antd";
import img from '../Assests/Images/doctorbg.2b7c226d.jpg';
import {Outlet} from "react-router-dom";

const CommonEditPage=() => {
  return (
    <>
      <Outlet />
      <section className="editPage_Info">
        <form className="editPage_info_Form">
          <table>
            <tbody>
              <tr>
                <td className="editPage_info_FormTd1">
                  <table>
                    <tbody>
                      <tr>
                        <td><label>First Name</label></td>
                        <td><label>Last Name</label></td>
                      </tr>
                      <tr>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                      </tr>
                      <tr>
                        <td><label>Birth Date</label></td>
                        <td><label>Blood Group</label></td>
                      </tr>
                      <tr>
                        <td><DatePicker className="ediForm_datepicker" /></td>
                        <td>
                          <select>
                            <option>A</option>
                            <option>A+</option>
                            <option>B</option>
                            <option>B+</option>
                            <option>O</option>
                            <option>O+</option>
                            <option>O-</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td><label>Mobile</label></td>
                      </tr>
                      <tr>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                        <td><label>Email</label></td>
                      </tr>
                      <tr>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                        <td><label>Address</label></td>
                      </tr>
                      <tr>
                        <td><input type="text" /></td>
                      </tr>
                      <tr>
                        <td><label>City</label></td>
                        <td><label>State</label></td>
                      </tr>
                      <tr>
                        <td><input type="text" /></td>
                        <td>
                          <select>
                            <option>Delhi</option>
                            <option>UP</option>
                            <option>Mumbai</option>
                            <option>Haryana</option>
                            <option>Punjab</option>
                            <option>Kerala</option>
                            <option>UK</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td><label>Remarks</label></td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          <textarea
                            rows="5"
                            column="50"
                            style={{width: "100%"}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td><button>Update</button></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="editPage_info_FormTd2">
                  <div className="edit_form_DpUpload">
                    <img src={img} alt="Profilepicture" />
                  </div>
                  <br />
                  <div className="edit_form_fileUpload">
                    <Button>
                      <Upload>Upload Image</Upload>
                    </Button>
                    <br />
                    <br />
                    <Button>Remove</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
      </section>
    </>
  );
};

export default CommonEditPage;
