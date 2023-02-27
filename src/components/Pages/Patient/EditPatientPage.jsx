import {DatePicker,Button,Upload} from "antd";
import React,{useState} from "react";
import img from '../../../Assets/Images/doctorbg.2b7c226d.jpg';

const EditPatientPage=(props) => {
    const [inputs,setInputs]=useState({
        first_name: props.first_name,
        last_name: props.last_name,
        birth_date: props.birth_date,
        blood_group: props.blood_group,
        mobile: props.mobile,
        email: props.email,
        address: props.address,
        city: props.city,
        state: props.state,
        remarks: props.remarks,
    });


    const ChangeInputHandler=(e) => {
        const {name,value}=e.target;
        setInputs((prevVal) => {
            return {
                ...prevVal,
                [name]: value,
            };
        });
    };

    const EditFormHandler=(e) => {
        e.preventDefault();
        console.log(inputs);
    };

    return (
        <>
            <section className="editPage_Info">
                <form className="editPage_info_Form" onSubmit={EditFormHandler} >
                    <table>
                        <tbody>
                            <tr>
                                <td className="editPage_info_FormTd1">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td> <label>First Name</label></td>
                                                <td> <label>Last Name</label></td>
                                            </tr>
                                            <tr>
                                                <td><input type="text" name="first_name"
                                                    value={inputs.first_name} onChange={ChangeInputHandler} /></td>
                                                <td><input type="text" name="last_name" value={inputs.last_name} onChange={ChangeInputHandler} /></td>
                                            </tr>
                                            <tr>
                                                <td> <label>Birth Date</label></td>
                                                <td> <label>Blood Group</label></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <DatePicker className="ediForm_datepicker" name="birth_date" value={inputs.birth_date} onChange={ChangeInputHandler} />
                                                </td>
                                                <td>
                                                    <select name="blood_group" value={inputs.blood_group} onChange={ChangeInputHandler}  >
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
                                                <td> <label>Mobile</label></td>
                                            </tr>
                                            <tr>
                                                <td><input type="number" name="mobile" value={inputs.mobile} onChange={ChangeInputHandler} /></td>
                                            </tr>
                                            <tr>
                                                <td> <label>Email</label></td>
                                            </tr>
                                            <tr>
                                                <td><input type="email" name="email" value={inputs.email} onChange={ChangeInputHandler} /></td>
                                            </tr>
                                            <tr>
                                                <td> <label>Address</label></td>
                                            </tr>
                                            <tr>
                                                <td><input type="text"
                                                    name="address" value={inputs.address} onChange={ChangeInputHandler} /></td>
                                            </tr>
                                            <tr>
                                                <td> <label>City</label></td>
                                                <td> <label>State</label></td>
                                            </tr>
                                            <tr>
                                                <td><input type="text" name="city" value={inputs.city} onChange={ChangeInputHandler} /></td>
                                                <td>
                                                    <select name="state" value={inputs.state} onChange={ChangeInputHandler}  >
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
                                                <td> <label>Remarks</label></td>
                                            </tr>
                                            <tr>
                                                <td colSpan="4">
                                                    <textarea
                                                        name="remarks" value={inputs.remarks} onChange={ChangeInputHandler}
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
                                        <Button> <Upload>Upload Image</Upload> </Button>
                                        <br /><br />
                                        <Button>Remove</Button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <br />
            </section>
            <section className="editPage_Info2">
                <form>
                    <label >Bed Allotment Details</label>
                    <br />
                    <br />
                    <table className="editInfo_Table">
                        <tbody>
                            <tr>
                                <td>Bed Number</td>
                                <td>Bed Number</td>
                            </tr>
                            <tr>
                                <td>Bed Type</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>Alloted Date</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Alloted Time</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Care Taker</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Discharge Date</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </section>
        </>
    );
};

export default EditPatientPage;
