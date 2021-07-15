import React from "react";
import { format } from "date-fns";
import { Call } from "./Call.props";
import { CallRow, CallText, Container, HeaderText, LabelText } from "./CallDetails.styles";

const formatPhone = (phone: string) => {
  const match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
  return match[1] + '-' + match[2] + '-' + match[3];
}

const renderCall = (call: Call) => {
  const time = format(new Date(call.timestamp), "h:maaa");

  return (
    <div>
      <CallRow>
        <LabelText>Name</LabelText>
        <CallText>{`${call.first_name} ${call.last_name}`}</CallText>
      </CallRow>
      <CallRow>
        <LabelText>Phone Number</LabelText>
        <CallText>{formatPhone(call.phone_number)}</CallText>
      </CallRow>
      <CallRow>
        <LabelText>Location</LabelText>
        <CallText>{`${call.city}, ${call.state}`}</CallText>
      </CallRow>
      <CallRow>
        <LabelText>Priority</LabelText>
        <CallText>{call.priority}</CallText>
      </CallRow>
      <CallRow>
        <LabelText>Time of call</LabelText>
        <CallText>{time}</CallText>
      </CallRow>
    </div>
  );
};

export const CallDetails = ({ call }: Call) => {
  return (
    <Container>
      <HeaderText>Current Call:</HeaderText>
      {call && renderCall(call)}
    </Container>
  );
};

export default CallDetails;
