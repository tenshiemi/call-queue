import React from "react";
import CallDetails from "./CallDetails";
import QueueHeader from "./QueueHeader";
import { Call } from './Call.props';
import { Container } from "./QueueCard.styles";

interface QueueCardProps {
  callQueue: Call[];
  setCallQueue: () => void;
}

export const QueueCard = ({ callQueue, setCallQueue }: QueueCardProps) => {
  return (
    <Container>
      <QueueHeader callQueue={callQueue} setCallQueue={setCallQueue} />
      <CallDetails call={callQueue[0]} />
    </Container>
  );
};

export default QueueCard;
