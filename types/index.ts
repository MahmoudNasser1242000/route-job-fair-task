export interface ICustomer {
    id: number,
    name: string
}

export interface ITransaction {
    id: number,
    customer_id: number,
    date: string,
    amount: number
}