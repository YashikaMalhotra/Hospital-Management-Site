import {Space} from "antd";
import Search from "antd/es/transfer/search";
import React,{useState, useEffect} from "react";
import {Modal} from "antd";
import {useParams} from "react-router-dom";
import MedPageFormat from "./MedPageFormat";
import "../../../../Assets/Styles/CommonPageFormat.scss";

const Medicine=(props) => {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [data,setData]=useState([]);
    const params=useParams();

    const [newinputs,setNewInputs]=useState({
        medicineName: "",
        company: "",
        qty: "",
        remarks: "",
        status: "",
        description: "",
        types: "",
    });
    useEffect(() => {
        fetch("https://realtime-database-57702-default-rtdb.firebaseio.com/Medicines%20")
            .then((res) => res.json())
            .then((data) => setData(data));
    },[]);

    const handleOk=() => setIsModalOpen(false);
    const handleCancel=() => setIsModalOpen(false);
    
    var add=data.length;

    const ChangeInputHandler=(e) => {
        const {name,value}=e.target;
        setNewInputs((prevVal) => {
            return {
                ...prevVal,
                [name]: value,
            };
        });
    };

    const addItemfunction=(vall) => {
        const newBedAlot={
            ...vall,
        }
        setData(prevBedAlot => {
            return [newBedAlot,...prevBedAlot]
        });
    }
    const MedFormSubmitHandler=(e) => {
        e.preventDefault();
        console.log(newinputs);
    };

    const deleteDataHandler=(dataAdding) => {
        setData((prevVal) => {
            const newdata=prevVal.filter((vall) => vall.id!==dataAdding);
            return newdata;
        });
    };

    let content=(
        <tr>
            <td colSpan="10" style={{textAlign: "center"}}>
                No data found
            </td>
        </tr>
    );
    if(data.length>0) {
        content=data.map((val) => (
            <MedPageFormat
                key={val.id}
                id={val.id}
                medicineName={val.medicineName}
                category={val.category}
                description={val.description}
                company={val.company}
                remarks={val.remarks}
                qty={val.qty}
                status={val.status}
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
                <button className="addnurse_Btn" onClick={() => setIsModalOpen(true)} additem={addItemfunction}>
                    + Add {params.prodId}
                </button>

                <Modal title={"Add New "+params.prodId} open={isModalOpen} onOk={handleOk} footer={null} onCancel={handleCancel} >
                    <section className="editPage_Info">
                        <form className="editPage_info_Form" onSubmit={MedFormSubmitHandler} >
                            <table>
                                <tbody>
                                    <tr>
                                        <td> <label>Medicine Name</label> </td>
                                        <td> <label>Category</label> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type="text" name="medicineName" value={newinputs.medicineName} onChange={ChangeInputHandler} />
                                        </td>
                                        <td>
                                            <select name="types">
                                                <option>type-1</option>
                                                <option>type-2</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <label>Company</label> </td>

                                        <td> <label>Qty</label> </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" value={newinputs.company} onChange={ChangeInputHandler} name="companyName" />
                                        </td>
                                        <td>
                                            <input type="text" name="qty" value={newinputs.qty} onChange={ChangeInputHandler} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <label>Remark</label> </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <input type="text" name="remarks" value={newinputs.remarks} onChange={ChangeInputHandler} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <label>Status</label> </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <input type="text" name="status" value={newinputs.status} onChange={ChangeInputHandler} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td> <label>Description</label> </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4">
                                            <textarea
                                                rows="5"
                                                column="50"
                                                style={{width: "100%"}}
                                                name="description"
                                                value={newinputs.description}
                                                onChange={ChangeInputHandler}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <button className="update_Btn">Ok</button>
                        </form>
                    </section>
                </Modal>
            </header>
            <div className="Data_Table_Div">
                <table className="Data_Table" cellSpacing="1">
                    {content&&(
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Company</th>
                                <th>Remark</th>
                                <th>Qty</th>
                                <th>Status</th>
                                <th colSpan="2">Option</th>
                            </tr>
                        </thead>
                    )}
                    <tbody>{content}</tbody>
                </table>
            </div>
        </>
    );
};

export default Medicine;
