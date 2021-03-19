import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

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

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions').then(response => {
            const apiTransactions: TransactionProps[] = response.data.transactions;

            const formattedTransactions = apiTransactions.map(transaction => ({
                ...transaction,
                formattedValue: new Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency'
                }).format(transaction.amount),

                formattedDate: new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
            }))
            setTransactions(formattedTransactions);
        })
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {transaction.type === 'withdraw' && '-'} {transaction.formattedValue}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.formattedDate}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </Container>
    )
}