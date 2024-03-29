import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import GoalForm from '../components/goalForm';
import Spinner from '../components/Spinner';
import { getGoals, reset} from '../features/goals/goalSlice';
import GoalItem from '../components/GoalItem';
import UpdateGoalForm from '../components/updateGoalForm';

function Dashboard() {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  let goal = {};

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {user} = useSelector(state => state.auth);
  const {goals, isLoading, isError, message} = useSelector(state => state.goals);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    } else {
      dispatch(getGoals());
    }

    return () => {
      dispatch(reset());
    }
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />
  }

  const onEdit = goalData => {
    setIsUpdateMode(true);
    goal = goalData;
  }

  const onClose = () => {
    setIsUpdateMode(false);
  }

  return (
    isUpdateMode ? <UpdateGoalForm goal={goal} onClose={onClose} /> :
    <>
      <section className='heading'>
        <h1>Wellcome {user && user.name} </h1>
        <p>Saving Dashboard</p>
      </section>

      <GoalForm />

      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map(goal => 
              <GoalItem key={goal._id} goal={goal} onEdit={onEdit} />
            )}
          </div>
        ) : (<h3>It's a great time to start your savings</h3>)}
      </section>
    </>
  )
}

export default Dashboard