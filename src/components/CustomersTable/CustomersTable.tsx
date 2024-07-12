import axios from "axios";
import CustomersInfo from "../CustomersInfo/CustomersInfo";
import { ICustomer } from "../../../types/index.ts";
import SearchForms from "../SearchForms/SearchForms.tsx";
import { useEffect, useState } from "react";

const CustomersTable = () => {
    const [customers, setCustomers] = useState<ICustomer[]>([]);
    const [amount, setAmount] = useState<string>("");
    const [customerName, setCustomerName] = useState<string>("");
    const getCustomers = async (name: string) => {
        const { data } = await axios.get(`http://localhost:3000/customers?name=${name}`);
        setCustomers(data)
    }

    const searchAmountSubmit = (e: React.FormEvent<HTMLFormElement>, amountValue: string) => {
        e.preventDefault()
        if (amountValue !== "") {
            setAmount(amountValue);
        } else {
            setAmount("")
        }
    };

    const searchNameSubmit = (e: React.FormEvent<HTMLFormElement>, name: string) => {
        e.preventDefault()
        if (name !== "") {
            setCustomerName(name);
            console.log(customers);
            
        } else {
            setCustomerName("")
        }
    };

    useEffect(() => {
        getCustomers(customerName)
    }, [customerName]);

    return (
        <>
            <SearchForms searchAmountSubmit={searchAmountSubmit} searchNameSubmit={searchNameSubmit}/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.length ? (
                            customers?.map((customer: ICustomer, index: number) => (
                                <CustomersInfo key={customer.id} index={index} customer={customer} amount={amount} />
                            ))
                        ) : (
                            <tr>
                                <td rowSpan={4} className="text-[30px] p-5 font-semibold">There are no customers!</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CustomersTable;
