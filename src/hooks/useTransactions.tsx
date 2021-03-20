import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { formatDate } from "../utils/formatDate";
import { formatValue } from "../utils/formatValue";

interface TransactionProps {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
    formattedValue: string;
    formattedDate: string;
}

type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt' | 'formattedValue' | 'formattedDate'>

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: TransactionProps[];
    createNewTransaction: (transaction: TransactionInputProps) => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions').then(response => {
            const apiTransactions: TransactionProps[] = response.data.transactions;

            const formattedTransactions = apiTransactions.map(transaction => ({
                ...transaction,
                formattedValue: formatValue(transaction.amount),
                formattedDate: formatDate(new Date())
            }))
            setTransactions(formattedTransactions);
        })
    }, []);

    async function createNewTransaction(transactionInput: TransactionInputProps) {
        const response = await api.post('transactions', {
            ...transactionInput,
            createdAt: new Date(),
            formattedValue: formatValue(transactionInput.amount),
            formattedDate: formatDate(new Date())
        });

        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction
        ])

    }

    return (
        <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )

}
export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context;
}