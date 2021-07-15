import React from "react";
import CallDetails from "./CallDetails";
import QueueHeader from "./QueueHeader";
import { Call } from "./Call.props";
import { Container } from "./QueueCard.styles";

interface QueueCardProps {
  callQueue: Call[];
  currentCall: Call;
  setCallQueue: () => void;
  setCurrentCall: () => void;
}

export const QueueCard = ({
  callQueue,
  currentCall,
  setCallQueue,
  setCurrentCall,
}: QueueCardProps) => {
  return (
    <Container>
      <QueueHeader
        callQueue={callQueue}
        setCallQueue={setCallQueue}
        setCurrentCall={setCurrentCall}
      />
      <CallDetails call={currentCall} />
    </Container>
  );
};

export default QueueCard;
