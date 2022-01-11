import  { useState, useEffect } from 'react';

const TransActionComponent = ({transactions}) => {
    const [searchItem, setSearchItem] = useState("");
    const [filteredTnx, setFilteredTnx] = useState(transactions)

    const filterTransactions = (search) =>{
        if(!search || search === "") {
            setFilteredTnx(transactions);
            return;
        }
        const filtered = transactions.filter(t =>
            t.desc.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredTnx(filtered);
    }

    const searchHandler = (e) => {
        setSearchItem(e.target.value);
        filterTransactions(e.target.value);
    }

    useEffect(() => {
        filterTransactions(searchItem);
    }, [transactions]);

    return (
        <section>
            <input 
                type="text"
                value={searchItem}
                onChange={searchHandler}
                placeholder="search in transactions..."
                className="search"
            />
            {filteredTnx.length ?
                filteredTnx.map((t) => (
                    <div key={t.id} className="transaction" 
                        style={{ borderRight:t.type === "expense" && "4px solid red"}} >
                        <span> {t.desc} </span>
                        <span> {t.amount} </span>
                    </div>
                )) : "add some transactions!"
            }
        </section>
    ); 
}
export default TransActionComponent; 