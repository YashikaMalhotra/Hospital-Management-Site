import React from "react";
import {DeleteOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {EditOutlined} from "@ant-design/icons";
import '../../../Assets/Styles/CommonPageFormat.scss';
import {NavLink} from "react-router-dom";

const PatientPageFormat=(props) => {
    const deleteDataHandler=() => props.onDelete(props.id);

    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td><div className="profile_image">{props.profile}</div></td>
                <td>{props.first_name+" "+props.last_name}</td>
                <td>{props.sex}</td>
                <td>{props.age}</td>
                <td>{props.blood_group}</td>
                <td>{props.mobile}</td>
                <td>{props.city}</td>
                <td>{props.birth_date}</td>
                <td>{props.time}</td>
                <td>
                    <NavLink to='/userpage/patient/editpatientpage' className="options_Btn" >
                        <EditOutlined
                        />
                    </NavLink>
                </td>
                <td>

                    <Button onClick={deleteDataHandler} className="options_Btn">
                        <DeleteOutlined />
                    </Button>
                </td>
            </tr>
        </>
    )
}

export default PatientPageFormat;