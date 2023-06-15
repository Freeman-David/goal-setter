import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createGoal} from '../features/goals/goalSlice';

function GoalForm() {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');

    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();

        dispatch(createGoal({name, goal}));
        setName('');
        setGoal('');
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type="text" placeholder='What are you saving for' name='name' id='name' value={name} onChange={e => setName(e.target.value)} />
                <input type="text" pattern='\d*' placeholder='How much do you need' name='goal' id='goal' value={goal} onChange={e => setGoal(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>Add Saving</button>
            </div>
        </form>
    </section>
  )
}

export default GoalForm;