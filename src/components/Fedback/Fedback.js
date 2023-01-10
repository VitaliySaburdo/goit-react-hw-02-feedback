import React from 'react';
import { Container, Button, Box } from './Feedback.styled';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <h2>Please leave feedback</h2>
        <Box>
          <Button type="button">Good</Button>
          <Button type="button">Neutral</Button>
          <Button type="button">Bad</Button>
        </Box>
      </Container>
    );
  }
}

export default Feedback;
