import React from 'react';
import { Container, LabelText, NextButton } from './QueueHeader.styles';

interface QueueHeaderProps {
  callQueue: Call[];
  setCallQueue: () => void;
}

export const QueueHeader = ({ callQueue, setCallQueue }: QueueHeaderProps) => {
  const getNextCall = () => {
    setCallQueue(callQueue.splice(1));
  };

  return (
    <Container>
      <p>
        <LabelText>{'Queued calls:'}</LabelText>
        {` ${callQueue.length}`}
      </p>
      <NextButton disabled={callQueue.length < 1} onClick={getNextCall}>Next Call</NextButton>
    </Container>
  );
}

export default QueueHeader;