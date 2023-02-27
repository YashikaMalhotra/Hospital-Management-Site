import {UserAddOutlined} from "@ant-design/icons";
import {Button,DatePicker,Modal,Upload} from "antd";
import React,{useState} from "react";
import {useParams} from "react-router-dom";
import '../Assets/Styles/CommonModal.scss'

const CommonModal=(props) => {
    const params=useParams();
    const [isModalOpen,setIsModalOpen]=useState(false);

    const handleOk=() => setIsModalOpen(false);
    const handleCancel=() => setIsModalOpen(false);

    return (
        <>
            <button className="addnurse_Btn" onClick={() => setIsModalOpen(true)}>+ Add {params.id}</button>

            <Modal title={"Add New "+params.id} open={isModalOpen} onOk={handleOk} footer={null} onCancel={handleCancel} >
                <section className="editPage_Info">
                    <form className="editPage_info_Form">
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
                                    <td>
                                        <DatePicker className="ediForm_datepicker" />
                                    </td>
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
                                    <td colSpan="2"><input type="number" /></td>
                                </tr>
                                <tr>
                                    <td><label>Email</label></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><input type="email" /></td>
                                </tr>
                                <tr>
                                    <td><label>Address</label></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><input type="text" /></td>
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
                                        <textarea rows="5" column="50" style={{width: "100%"}} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="editPage_info_FormTd2">
                                        <section className="edit_form_DpUpload">
                                            <UserAddOutlined />
                                        </section>
                                    </td>
                                    <td>
                                        <center>
                                            <Button> <Upload>Upload Image</Upload> </Button>
                                            <br /> <br />
                                            <Button>Remove</Button>
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <button className="update_Btn">Save</button>
                    </form>
                </section>
            </Modal>
        </>
    );
};

export default CommonModal;
