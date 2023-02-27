import React,{useState} from "react";
import {Input,Space} from "antd";
import CommonModal from "../../CommonModal";
import {DummyPatientData} from "./Dummy_PatientData";
import PatientPageFormat from "./PatientPageFormat";
import '../../../Assets/Styles/CommonPageFormat.scss';

const {Search}=Input;
var patNum;
const Patient=(props) => {
    const [expense,setExpenses]=useState(DummyPatientData);
    patNum=expense.length;

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
                <h5>#{patNum}</h5>
                <CommonModal />
            </header>

            <div className="Data_Table_Div">
                <table className="Data_Table" cellSpacing="1">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Sex</th>
                            <th>Age</th>
                            <th>Blood Group</th>
                            <th>City</th>
                            <th>City</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th colSpan="2">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expense.map((val) => (
                            <PatientPageFormat
                                key={val.id}
                                id={val.id}
                                profile={val.profile}
                                first_name={val.first_name}
                                last_name={val.last_name}
                                sex={val.Sex}
                                age={val.Age}
                                blood_group={val.BloodGroup}
                                mobile={val.Mobile}
                                city={val.City}
                                birth_date={val.Date}
                                time={val.Time}
                                onDelete={deleteDataHandler}
                                addItem={addItemfunction}
                            />

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Patient;
