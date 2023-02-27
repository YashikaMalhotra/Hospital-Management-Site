import React,{useState} from "react";
import {Button,Modal} from "antd";
import {useParams} from "react-router-dom";
import {EditOutlined} from "@ant-design/icons";
import "../../../../Assets/Styles/CommonPageFormat.scss";

const EditMedModal=(props) => {
    const params=useParams();
    const [isModalOpen,setIsModalOpen]=useState(false);

    const [inputs,setInputs]=useState({
        medicineName: props.medicineName,
        company: props.company,
        qty: props.qty,
        remarks: props.remarks,
        status: props.status,
        description: props.description,
        types: props.types,
    });

    const handleOk=() => setIsModalOpen(false);
    const handleCancel=() => setIsModalOpen(false);
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
            <Button className="options_Btn" onClick={() => setIsModalOpen(true)}>
                <EditOutlined />
            </Button>

            <Modal
                title={"Add New "+params.prodId}
                open={isModalOpen}
                onOk={handleOk}
                footer={null}
                onCancel={handleCancel}
            >
                <section className="editPage_Info">
                    <form className="editPage_info_Form" onSubmit={EditFormHandler}>
                        <table>
                            <tbody>
                                <tr>
                                    <td> <label>Medicine Name</label> </td>
                                    <td> <label>Category</label> </td>
                                </tr>
                                <tr>
                                    <td> <input type="text"
                                        name="medicineName"
                                        value={inputs.medicineName} onChange={ChangeInputHandler} /> </td>
                                    <td>
                                        <select>
                                            <option>type-1</option>
                                            <option>type-2</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label>Company</label> </td>

                                    <td> <label>Qty</label> </td>
                                </tr>
                                <tr>
                                    <td> <input type="text"
                                        name="company"
                                        value={inputs.company} onChange={ChangeInputHandler} /> </td>
                                    <td> <input type="text"
                                        name="qty"
                                        value={inputs.qty} onChange={ChangeInputHandler} /> </td>
                                </tr>
                                <tr>
                                    <td> <label>Remarks</label> </td>
                                </tr>
                                <tr>
                                    <td colSpan="2"> <input type="text"
                                        name="remarks"
                                        value={inputs.remarks} onChange={ChangeInputHandler} />
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label>Status</label> </td>
                                </tr>
                                <tr>
                                    <td colSpan="2"> <input type="text"
                                        name='status'
                                        value={inputs.status} onChange={ChangeInputHandler} />
                                    </td>
                                </tr>

                                <tr>
                                    <td> <label>Description</label> </td>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <textarea
                                            rows="5"
                                            column="50"
                                            style={{width: "100%"}}
                                            value={inputs.description}
                                            name="description"
                                            onChange={ChangeInputHandler}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <button className="update_Btn">Ok</button>
                    </form>
                </section>
            </Modal>
        </>
    );
};

export default EditMedModal;
