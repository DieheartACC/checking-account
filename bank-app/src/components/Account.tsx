import React, {ChangeEvent, useState} from "react";

export const Account = () => {
    const [name, setName] = useState("Bill");
    const [balance, setBalance] = useState(0.00);
    const [inputAmt, setInputAmt] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputAmt(event.target.value);
    }

    const handleDeposit = () => {
        let amount = Number.parseFloat(inputAmt)
        if (amount > 0) {
            setBalance(balance + amount);
            setInputAmt("");
        }
    }

    const handleWithdrawal = () => {
        let amount = Number.parseFloat(inputAmt)
        if (amount > 0) {
            setBalance(balance - amount);
            setInputAmt("");
        }
    }

    return (
        <div>
            <h1>ACCOUNT PAGE</h1>
            <div>
                <h4>Hello, {name}</h4>
                <span>Account Balance: ${balance.toFixed(2)}</span>
                <div>
                    <input value={inputAmt === "" ? "" : inputAmt} onChange={(event) => {
                        handleInputChange(event);
                    }}/>
                    <div>
                        <button
                            onClick={handleDeposit}
                        >Deposit
                        </button>
                        <button
                            onClick={handleWithdrawal}
                        >Withdraw
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}