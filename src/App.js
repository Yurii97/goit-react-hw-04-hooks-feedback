import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import Section from './components/Section/Section.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Notification from './components/Notification/Notification.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback=(e)=>{    
    this.setState((prevState) => (
      {[e]:prevState[e]+1}
      )
    );    
  }
  countTotalFeedback(){
    const arrayValue=Object.values(this.state);    
    return arrayValue.reduce((acc, value)=> (acc+value),0)
  };

  countPositiveFeedbackPercentage(){
    const percentage = this.state.good/this.countTotalFeedback()*100
    return percentage ? percentage.toFixed() :0;
  };

  render() {
    const {good, neutral, bad} = this.state;
    const total=this.countTotalFeedback()
    const percentage = this.countPositiveFeedbackPercentage()
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.addFeedback}/>
        </Section>
        <Section title={'Statistics'}>
          {total?(<Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={total} 
            positivePercentage={percentage}/>):(<Notification message="There is no feedback"/>)}
          
        </Section>
      </>
    );
  }
}

export default App;
