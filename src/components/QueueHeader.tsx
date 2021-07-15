import React from 'react';
import { Container, LabelText, NextButton } from './QueueHeader.styles';

interface QueueHeaderProps {
  callQueue: Call[];
  setCallQueue: () => void;
  setCurrentCall: () => void;
}

export const QueueHeader = ({ callQueue, setCallQueue, setCurrentCall }: QueueHeaderProps) => {
  const getNextCall = () => {
    const newQueue = [...callQueue]
    setCurrentCall(newQueue.shift())
    setCallQueue(newQueue);
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