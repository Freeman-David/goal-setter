import {useDispatch} from 'react-redux';
import {deleteGoal, updateGoal} from '../features/goals/goalSlice';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
 
function GoalItem({goal}) {
    const dispach = useDispatch();

    const onDelete = (goalId) => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h1>Are you sure?</h1>
              <p class="confirm-text">This action will delete your saving!</p>
              <div className="btns">
                <button class="btn btn-cancle" onClick={onClose}>No</button>
                <button class="btn btn-delete"
                  onClick={() => {
                    dispach(deleteGoal(goalId));
                    onClose();
                  }}
                >
                  Yes, Delete it!
                </button>
              </div>
            </div>
          );
        }
      });
    }

    const addMoney = (goalId) => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              
            </div>
          );
        }
      });
    }

    let savProgress = ((goal.amount / goal.goal) * 100).toFixed();
    let percentage = savProgress.toString() + '%';

  return (
    <div className="goal">
        <div>
          <h3>{goal.name}</h3>
          <div class="progress">
            <span>{goal.amount}$</span>
            <div class="graph">
              <div class="percentage" style={{width: percentage}}>
                <span class="text">{percentage}</span>
              </div>
            </div>
            <span>{goal.goal}$</span>
          </div>
        </div>
        <button onClick={() => onDelete(goal._id)} className="close">🗑️</button>
        <button onClick={() => addMoney(goal._id)} className='addMoneyBtn'>Add Money</button>
    </div>
  )
}

export default GoalItem