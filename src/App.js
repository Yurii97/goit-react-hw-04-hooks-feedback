import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import Section from './components/Section/Section.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Notification from './components/Notification/Notification.jsx';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addFeedback = e => {
    setState(prevState => ({ ...prevState, [e]: prevState[e] + 1 }));
  };
  const countTotalFeedback = () => {
    const arrayValue = Object.values(state);
    return arrayValue.reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = (state.good / countTotalFeedback()) * 100;
    return percentage ? percentage.toFixed() : '0';
  };

  const { good, neutral, bad } = state;
  const total = countTotalFeedback();

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={state} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
