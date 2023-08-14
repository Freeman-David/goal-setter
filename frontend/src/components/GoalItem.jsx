import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
 
function GoalItem({goal, onEdit}) {
    const dispatch = useDispatch();

    const onDelete = (goalId) => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h1>Are you sure?</h1>
              <p className="confirm-text">This action will delete your saving!</p>
              <div className="btns">
                <button className="btn btn-cancle" onClick={onClose}>No</button>
                <button className="btn btn-delete"
                  onClick={() => {
                    dispatch(deleteGoal(goalId));
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

    let savProgress = ((goal.saved / goal.amount) * 100).toFixed();
    let percentage = savProgress.toString() + '%';

  return (
    <div className="goal">
        <div>
          <h3>{goal.name}</h3>
          <div className="progress">
            <span>{goal.saved}$</span>
            <div className="graph">
              <div className="percentage" style={{width: percentage}}>
                <span className="text">{percentage}</span>
              </div>
            </div>
            <span>{goal.amount}$</span>
          </div>
        </div>
        <button onClick={() => onDelete(goal._id)} className="close">🗑️</button>
        <button onClick={() => onEdit(goal)} className='editBtn'>Edit saving</button>
    </div>
  )
}

export default GoalItem