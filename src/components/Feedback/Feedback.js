import React, { Component } from "react";
import Statistics from "./Statistics/Statistics"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Section from "./Section/Section"
import Notification from "./Notification/Notification"

const options = [
    "Good",
    "Neutral",
    "Bad"
]

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage() {
        const {good}  = this.state;
        const count = this.countTotalFeedback();
        return (count > 0) ? good * 100 / this.countTotalFeedback() : 0;
    }

    onLeaveFeedback = (idx) => {
        switch (options[idx]) {
            case "Good":
                this.setState(prevState => ({
                    good: prevState.good + 1,
                }))
                break;
            case "Neutral":
                this.setState(prevState => ({
                    neutral: prevState.neutral + 1,
                }))
                break;
            case "Bad":
                this.setState(prevState => ({
                    bad: prevState.bad + 1,
                }))
                break;

            default:
                break;
        }
    }

    render() {
        const { good, neutral, bad } = this.state;
        const countTotal = this.countTotalFeedback();

        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
                </Section>
                {countTotal ?
                    <Section title="Statistics">
                        < Statistics good={good} neutral={neutral} bad={bad} total={countTotal} positivePercentage={this.countPositiveFeedbackPercentage()} />
                    </Section> :
                    <Notification message="There is no feedback" />}
            </div>
        );
    }
}

export default Feedback;
