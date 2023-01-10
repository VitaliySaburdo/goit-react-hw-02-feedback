import React from 'react';
import { Container, Button, Box } from './Feedback.styled';

class Feedback extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    initialTotal: 0,
  };
  static propTypes = {
    //
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    total: this.props.initialTotal,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleIncrementNetural = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleIncrementBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good
  };


  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100)
  }

  render() {
    return (
      <Container>
        <h2>Please leave feedback</h2>
        <Box>
          <Button type="button" onClick={this.handleIncrementGood}>
            Good
          </Button>
          <Button type="button" onClick={this.handleIncrementNetural}>
            Neutral
          </Button>
          <Button type="button" onClick={this.handleIncrementBad}>
            Bad
          </Button>
        </Box>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countTotalFeedback() && this.countPositiveFeedbackPercentage()}%</p>
      </Container>
    );
  }
}

export default Feedback;
