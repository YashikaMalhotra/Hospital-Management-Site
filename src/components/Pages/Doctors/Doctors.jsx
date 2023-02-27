import {Space} from "antd";
import Search from "antd/es/transfer/search";
import React from "react";
import CommonModal from '../../CommonModal';
import CommonPageFormat from '../../CommonPageFormat';
import {DummyData} from "../DummyPage";

const Doctors=() => {
    var add=0;
    for(var i=0;i<DummyData.length;i++) {
        add=DummyData[i].id;
    }

    return (
        <>
            <header className="Input_SearchDiv">
                <Space direction="vertical" className="input">
                    <Search placeholder="input search text" enterButton />
                </Space>
                <h3>#{add}</h3>
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
                        {DummyData.map((val) => (
                            <CommonPageFormat
                                key={val.id}
                                id={val.id}
                                profile={val.profile}
                                name={val.name}
                                sex={val.Sex}
                                age={val.Age}
                                bloodgroup={val.BloodGroup}
                                city={val.City}
                                date={val.Date}
                                time={val.Time}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Doctors;
