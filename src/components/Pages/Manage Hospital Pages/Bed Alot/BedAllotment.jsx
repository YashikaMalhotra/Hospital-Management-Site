import {Space} from "antd";
import Search from "antd/es/transfer/search";
import React,{useState} from "react";
import {Modal} from "antd";
import {useParams} from "react-router-dom";
import "../../../../Assets/Styles/CommonPageFormat.scss";
import {DummyBedData} from "./Dummy_BedData";
import BedPageFormat from "./BedPageFormat";

const BedAllotment=(props) => {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [expense,setExpenses]=useState(DummyBedData);
    const params=useParams();

    const handleOk=() => setIsModalOpen(false);
    const handleCancel=() => setIsModalOpen(false);

    var add=expense.length;

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

    let content=(
        <tr>
            <td colSpan="10" style={{textAlign: "center",height: 'auto'}}>
                No data found
            </td>
        </tr>
    );
    if(expense.length>0) {
        content=expense.map((val) => (
            <BedPageFormat
                key={val.id}
                id={val.id}
                bedNumber={val.bedNumber}
                type={val.type}
                name={val.name}
                alotDate={val.alotDate}
                alotTime={val.alotTime}
                dischargeDate={val.dischargeDate}
                dischargeTime={val.dischargeTime}
                careTaker={val.careTaker}
                onDelete={deleteDataHandler}
            />
        ));
    }

    return (
        <>
            <header className="Input_SearchDiv">
                <Space direction="vertical" className="input">
                    <Search placeholder="input search text" enterButton />
                </Space>
                <h5>#{add}</h5>
                <button className="addnurse_Btn" onClick={() => setIsModalOpen(true)} addItem={addItemfunction}>
                    + Add {params.prodId}
                </button>

                <Modal title={"Add New "+params.prodId} open={isModalOpen} onOk={handleOk} footer={null} onCancel={handleCancel} >
                    <section className="editPage_Info">

                    </section>
                </Modal>
            </header>
            <div className="Data_Table_Div">
                <table className="Data_Table" cellSpacing="1">
                    {content&&(
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Bed Number</th>
                                <th>Type</th>
                                <th>Patient Name</th>
                                <th>Allotment Date</th>
                                <th>Allotment Time</th>
                                <th>Discharge Date</th>
                                <th>Discharge Time</th>
                                <th>Care Taker</th>
                                <th colSpan='2'>Option</th>
                            </tr>
                        </thead>
                    )}
                    <tbody>{content}</tbody>
                </table>
            </div>
        </>
    );
};

export default BedAllotment;
