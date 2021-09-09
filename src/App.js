// import React, { Component } from 'react';
import { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (value) => {
    switch (value) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    // const stateValues = Object.values(this.state);
    // return stateValues.reduce((acc, el) => acc + el, 0);
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeeds = countTotalFeedback();
    // const goodFeeds = this.state.good;
    const res = (good * 100) / totalFeeds;
    return Math.round(res);
  };

  // const { state, countTotalFeedback, countPositiveFeedbackPercentage } = this;
  const isAnyFeedbacks = Boolean(countTotalFeedback());
  const positiveInPersent = countPositiveFeedbackPercentage();
  const totalFeedbacks = countTotalFeedback();
  const state = { good, neutral, bad };

  return (
    <div className="App">
      <Section title="Please leave a feedback">
        <FeedbackOptions onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {isAnyFeedbacks && (
          <Statistics
            feedbackOptions={state}
            totalFeedbacks={totalFeedbacks}
            positivePercentage={positiveInPersent}
          />
        )}
      </Section>
      {!isAnyFeedbacks && <Notification message="No feedback given.." />}
    </div>
  );
};

// class classedApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = value => {
//     this.setState(prevState => ({ [value]: prevState[value] + 1 }));
//   };

//   countTotalFeedback = () => {
//     // const stateValues = Object.values(this.state);
//     // return stateValues.reduce((acc, el) => acc + el, 0);
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const totalFeeds = this.countTotalFeedback();
//     const goodFeeds = this.state.good;
//     const res = (goodFeeds * 100) / totalFeeds;
//     return Math.round(res);
//   };

//   render() {
//     const { state, countTotalFeedback, countPositiveFeedbackPercentage } = this;
//     const isAnyFeedbacks = Boolean(this.countTotalFeedback());
//     const positiveInPersent = countPositiveFeedbackPercentage();
//     const totalFeedbacks = countTotalFeedback();

//     return (
//       <div className="App">
//         <Section title="Please leave a feedback">
//           <FeedbackOptions onLeaveFeedback={this.addFeedback} />
//         </Section>
//         <Section title="Statistics">
//           {isAnyFeedbacks && (
//             <Statistics
//               feedbackOptions={state}
//               totalFeedbacks={totalFeedbacks}
//               positivePercentage={positiveInPersent}
//             />
//           )}
//         </Section>
//         {!isAnyFeedbacks && <Notification message="No feedback given.." />}
//       </div>
//     );
//   }
// }

export default App;
