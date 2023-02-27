import React,{useState} from "react";
import {Button,Modal} from "antd";
import {useParams} from "react-router-dom";
import {EditOutlined} from "@ant-design/icons";

const EditBedModal=(props) => {
    const params=useParams();
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [inputs,setInputs]=useState({
        careTaker: props.careTaker,
        bednumber: props.bedNumber,
        dischargetime: props.dischargeTime,
        dischargedate: props.dischargeDate
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
    const MedFormSubmitHandler=(e) => {
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
                    <form className="editPage_info_Form" onSubmit={MedFormSubmitHandler}>
                        <table>
                            <tbody>
                                <tr>
                                    <td> <label>Care Taker</label></td>
                                </tr>
                                <tr>
                                    <td colspan='4' > <input type="text" name="careTaker" value={inputs.careTaker} onChange={ChangeInputHandler} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>  <label>Bed Type</label> </td>
                                    <td>  <label>Bed Number</label> </td>
                                </tr>
                                <tr>
                                    <td >
                                        <select>
                                            <option>AC</option>
                                            <option>Non - AC</option>
                                        </select>
                                    </td>
                                    <td> <input type="text" name="bednumber" value={inputs.bednumber} onChange={ChangeInputHandler} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>  <label>Discharge Date</label> </td>
                                    <td>  <label>Discharge Time</label> </td>
                                </tr>
                                <tr>
                                    <td >
                                        <input type="text" name="dischargetime" value={inputs.dischargetime} onChange={ChangeInputHandler} />
                                    </td>
                                    <td> <input type="text" name="dischargedate" value={inputs.dischargedate} onChange={ChangeInputHandler} />
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

export default EditBedModal;
