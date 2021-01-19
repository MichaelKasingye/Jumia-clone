import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getbasketTotal } from '../ContextAPI/Reducer';
import { useStateValue } from '../ContextAPI/StateProvider';
import '../Style/Subtotal.css';

function Subtotal() {
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
            <>
            <p>
            Subtotal({basket.length} items): <strong>{`${value}`}</strong>
                </p>    
                <small className="subtotal_gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}

            decimalScale={2}
            value={getbasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"UGX: "}
            />
            <button>CHECKOUT</button>
        </div>
    )
}
export default Subtotal
