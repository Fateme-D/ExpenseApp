import {useState, useEffect} from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenseApp = () => {
    const [transactions, setTransactions] = useState([]);
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);

    const addTransaction = (formValues) => {
        console.log(formValues);
        const newData = {...formValues , id:Date.now() }
        setTransactions([...transactions, newData]);
    };

    //update state expense and income with changed transaction:
    useEffect(() => {
        let exp = 0;
        let inc = 0;
        transactions.forEach((t) => {
            t.type === "expense" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount));
        });
        setExpense(exp);
        setIncome(inc);
    }, [transactions]);

    return (
        <section className="container">
            <OverViewComponent income={income} expense={expense} addTransaction={addTransaction}/>
            <TransActionComponent transactions={transactions}/>
        </section>
    );
}
export default ExpenseApp;