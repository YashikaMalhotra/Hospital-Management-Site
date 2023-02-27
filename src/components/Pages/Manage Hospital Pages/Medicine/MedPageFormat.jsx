import React from "react";
import {DeleteOutlined} from "@ant-design/icons";
import {Button} from "antd";
import EditMedModal from "./EditMedModal";

const MedPageFormat=(props) => {
    const deleteDataHandler=() => props.onDelete(props.id);

    return (
        <>
            <tr>
                <td>
                    <ol>
                        <li>{props.id}</li>
                    </ol>
                </td>
                <td>{props.medicineName}</td>
                <td>{props.category}</td>
                <td>{props.description}</td>
                <td>{props.company}</td>
                <td>{props.remarks}</td>
                <td>{props.qty}</td>
                <td>{props.status}</td>
                <td>
                    <EditMedModal
                        medicineName={props.medicineName}
                        category={props.category}
                        description={props.description}
                        qty={props.qty}
                        company={props.company}
                        remarks={props.remarks}
                        status={props.status}
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

export default MedPageFormat;
