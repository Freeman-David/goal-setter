import { useState, useEffect } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { updateGoal } from '../features/goals/goalSlice';
import { useDispatch } from 'react-redux';

function UpdateGoalForm ({ goal, onClose}) {
    const [name, setName] = useState(goal.name);
    const [amount, setAmount] = useState(goal.amount);
    const [saved, setSaved] = useState(goal.saved);

    let submit = false;

    const dispatch = useDispatch();

    useEffect(() => {
        if (submit) {
            dispatch(updateGoal({name, amount, saved}));
        }
      }, [submit, dispatch, name, amount, saved]);

    const onSubmit = () => {
        submit = true;
    }

    return (
        <div className='custom-ui updateGoalForm'>
              <h1>Goal: {goal._id}</h1>
              <form onSubmit={() => onSubmit({name, amount, saved})}>
                <label htmlFor="for">For: </label>
                <input type="text" placeholder='What are you saving for' name='name' value={name} onChange={({target}) => setName(target.value)} />
                <label htmlFor="amount">Amount: </label>
                <input type="text" pattern='\d*' placeholder='How much do you need' name='amount' value={amount} onChange={({target}) => setAmount(target.value)}/>
                <label htmlFor="saved">Saved: </label>
                <input type="text" pattern='\d*' placeholder='How much did you saved' name='saved' value={saved} onChange={({target}) => setSaved(target.value)}/>

                <div className="btns">
                  <button className="btn btn-cancle" onClick={onClose()}>Cancle</button>
                  <button className="btn btn-update" type='submit' onClick={onClose}>
                  Update saving
                  </button>
                </div>
              </form>
            </div>
    )
}

export default UpdateGoalForm;