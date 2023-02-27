import React from "react";
import '../../../Assets/Styles/Payroll.scss';
import {DeleteOutlined} from "@ant-design/icons";
import {EditOutlined} from "@ant-design/icons";
import {Button} from "antd";
import '../../../Assets/Styles/CommonPageFormat.scss';

const PayrollPageFormat=(props) => {
    const deleteDataHandler=() => props.onDelete(props.id);
    return (
        <tr>
            <td>{props.payrollUIID}</td>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.pay}</td>
            <td>{props.month}</td>
            <td>{props.date}</td>
            <td>{props.time}</td>
            <td>{props.status}</td>
            <td>
                <Button className='options_Btn'>
                    <EditOutlined />
                </Button>
            </td>
            <td>
                <Button onClick={deleteDataHandler} className='options_Btn'>
                    <DeleteOutlined />
                </Button>
            </td>
            <td>
                <Button className='options_Btn'>
                    👁
                </Button>
            </td>
        </tr>
    );
};

export default PayrollPageFormat;
