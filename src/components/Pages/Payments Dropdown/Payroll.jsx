import React,{useState} from "react";
import '../../../Assets/Styles/Payroll.scss'
import PayrollPageFormat from './PayrollPageFormat';
import {NavLink} from "react-router-dom";
import {Space} from "antd";
import Search from "antd/es/transfer/search";
import {DummyPayrollData} from "./DummyPayroll";

const Payroll=() => {
    const [expense,setExpenses]=useState(DummyPayrollData);

    var add=0;
    for(var i=0;i<DummyPayrollData.length;i++) {
        add=DummyPayrollData[i].id;
    }
    const addItemfunction=(vall) => {
        const newBedAlot={
            ...vall,
        }
        setExpenses(prevBedAlot => {
            return [newBedAlot,...prevBedAlot]
        });
    }

    const deleteDataHandler=bedId => {
        setExpenses(prevBedAlot => {
            const newBedAlot=prevBedAlot.filter(vall => vall.id!==bedId);
            return newBedAlot;
        })
    };
    return (
        <>
            <header className="Input_SearchDiv">
                <Space direction="vertical" className="input">
                    <Search placeholder="input search text" enterButton />
                </Space>
                <h5>#{add}</h5>
                <NavLink to='/userpage/createpayroll'  >
                    <button className="createpayroll" onClick={addItemfunction}>+ Create Payroll</button>
                </NavLink>
            </header>

            <div className="Data_Table_Div">
                <table className="Data_Table" cellSpacing="1">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Employee Name</th>
                            <th>Pay</th>
                            <th>Month</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th colSpan="3">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expense.map((val) => (
                            <PayrollPageFormat
                                key={val.id}
                                payrollUIID={val.payrollUIID}
                                id={val.id}
                                name={val.name}
                                pay={val.pay}
                                month={val.month}
                                date={val.date}
                                time={val.time}
                                status={val.status}
                                onDelete={deleteDataHandler}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )

};

export default Payroll;
