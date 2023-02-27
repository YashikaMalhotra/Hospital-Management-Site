import '../../../Assets/Styles/Payroll.scss'
import React from "react";

const CreatePayroll=() => {

    return (
        <>
            <form className='form_table1'>
                <table className='table1'>
                    <tbody>
                        <tr>
                            <td><label>Employee Name</label></td>
                            <td><label>Month</label></td>
                            <td><label>Year</label></td>
                        </tr>

                        <tr>
                            <td><select>
                                <option>Michael</option>
                                <option>Lucy White</option>
                                <option>Lucy White</option>
                                <option>Lucy White</option>
                                <option>Lucy White</option>
                            </select></td>
                            <td><select>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select></td>
                            <td><input type="month" /></td>
                            <td><input type="reset" className='resetBtn' /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <br /><br />
            <form className='table_form2'>
                <h6>Allowance</h6>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td>Type</td>
                            <td>Amount</td>
                        </tr>
                        <tr>
                            <td><input type="number" /></td>
                            <td><input type="number" /></td>
                        </tr>
                        <br />
                        <tr className='Allowance_td'>
                            <td className='addAllowance_td'><button>+Add Allowance</button></td>
                            <td className='totalAllowance_td'><button>Total Allowance</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <form className='table_form3'>
                <h6>Deduction</h6>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td>Type</td>
                            <td>Amount</td>
                        </tr>
                        <tr>
                            <td><input type="number" /></td>
                            <td><input type="number" /></td>
                        </tr>
                        <br />
                        <tr className='Allowance_td'>
                            <td className='addAllowance_td'><button>+Add Deduction</button></td>
                            <td className='totalAllowance_td'><button>Total Deduction</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <form className='table_form4'>
                <h6>Total Summary</h6>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td>Basic</td>
                            <td ><input type='text' /></td>
                        </tr>
                        <tr>
                            <td>Total Allowance</td>
                            <td><input type='number' /></td>
                        </tr>
                        <tr>
                            <td>Total Deduction</td>
                            <td><input type='number' /></td>
                        </tr>
                        <tr>
                            <td>Net Salary</td>
                            <td><input type='number' /></td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>
                                <select>
                                    <option>Paid</option>
                                    <option>Unpaid</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='createpayrollBtn_tr'>
                            <td colSpan='2'> <button type='submit' className='createpayroll_btn'>Create Payroll</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default CreatePayroll;
