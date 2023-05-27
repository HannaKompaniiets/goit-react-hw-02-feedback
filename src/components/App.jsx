import React, { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbaxckOptions";
import Statistics from "./statistics/Statistics";
import Section from "./section/Section";
import Notification from "./notification/Notification";

class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  
  

  handleChange = (event) => {
    this.setState(prevState => {
      return {
        [event]: prevState[event] + 1,
      }
    });
  };

  countTotalFeedback = () => { 
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedbackPercentager = Math.round((good / this.countTotalFeedback()) * 100, 0);
    return positiveFeedbackPercentager;
  }
 
  render() { 
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    
    return (
      <div>
        <Section title={'Please leave feedback'} >     
          <FeedbackOptions options={
          options}
            onLeaveFeedback={this.handleChange} />
          </Section> 
        <Section title={"Statistics"}>
        {this.countTotalFeedback() > 0
          ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />
          ) : (
        <Notification message="There is no feedback." />
            )
          }
          </Section>
      </div>
  );
};

 }

export default App;

