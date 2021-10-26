import react, {createContext, useReducer} from "react";
//intial state
const intialState = {
    DUMMYTRAN: [
        {
            text: "School",
            amount: '- ₹'+"70",
            type: "expense"
        },
        {
            text: "Family",
            amount: '+ ₹'+"20",
            type: "income"
        },
        {
            text: "Trip",
            amount: '- ₹'+"50",
            type: "expense"
        }
            
    ]
}
  
//create context
export const transactionContext = createContext(intialState);
//provider Context
const transactionContextProvider = () => {
    return (
        
    )
}


