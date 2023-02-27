import React from "react";
import {DeleteOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {EditOutlined} from "@ant-design/icons";
import '../Assets/Styles/CommonPageFormat.scss';
import {NavLink,useNavigate} from "react-router-dom";

const CommonPageFormat=(props) => {
    const navigate=useNavigate();
    const alotBtnHandler=(e) => {
        e.preventDefault();
        navigate('/:editpatientpage')
    };

    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td><span className="">{props.profile}</span></td>
                <td>{props.name}</td>
                <td>{props.sex}</td>
                <td>{props.age}</td>
                <td>{props.bloodgroup}</td>
                <td>{props.city}</td>
                <td>{props.city}</td>
                <td>{props.date}</td>
                <td>{props.time}</td>
                <td>
                    <NavLink to='/userpage/patient/editpatientpage' className="options_Btn">
                        <EditOutlined />
                    </NavLink>
                </td>
                <td>

                    <Button onClick={alotBtnHandler} className="options_Btn">
                        <DeleteOutlined />
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default CommonPageFormat;
