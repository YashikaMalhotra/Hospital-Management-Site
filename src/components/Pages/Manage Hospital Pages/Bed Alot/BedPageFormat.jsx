import React from "react";
import {DeleteOutlined} from "@ant-design/icons";
import {Button} from "antd";
import EditBedModal from "./EditBedModal";


const BedPageFormat=(props) => {
    const deleteDataHandler=() => props.onDelete(props.id);

    return (
        <>
            <tr>
                <td>
                    {props.id}
                </td>
                <td>{props.bedNumber}</td>
                <td>{props.type}</td>
                <td>{props.name}</td>
                <td>{props.alotDate}</td>
                <td>{props.alotTime}</td>
                <td>{props.dischargeDate}</td>
                <td>{props.dischargeTime}</td>
                <td>{props.careTaker}</td>
                <td>
                    <EditBedModal
                        bedNumber={props.bedNumber}
                        name={props.name}
                        type={props.type}
                        alotDate={props.alotDate}
                        alotTime={props.alotTime}
                        dischargeDate={props.dischargeDate}
                        dischargeTime={props.dischargeTime}
                        careTaker={props.careTaker}
                    />
                </td>
                <td>
                    <Button onClick={deleteDataHandler} className="options_Btn">
                        <DeleteOutlined />
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default BedPageFormat;
