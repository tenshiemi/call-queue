import React, { useEffect, useState } from "react";
import QueueCard from "../components/QueueCard";
import Call from "../components/Call";
import { Container } from "./HomeScreen.styles";

const ws = new WebSocket("ws://localhost:7777");

export const findIndex = (array: Call[], itemPriority: number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].priority > itemPriority) {
      return i;
    }
  }

  return array.length;
};

export const insertNewMessage = (array: Call[], item: Call) => {
  if (array.length === 0) {
    return [item];
  }
  const insertLocation = findIndex(array, item.priority);
  array.splice(insertLocation, 0, item);
  return array;
};

export const HomeScreen = () => {
  const [callQueue, setCallQueue] = useState([]);
  const [currentCall, setCurrentCall] = useState();

  useEffect(() => {
    ws.onopen = () => {
      console.log("Connected to call feed");
    };

    return () => {
      ws.onclose = () => {
        console.log("Disconnected from call feed");
      };
    };
  });

  useEffect(() => {
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.priority) {
        if (!currentCall) {
          return setCurrentCall(message);
        } else {
          setCallQueue(insertNewMessage([...callQueue], message));
        }
      }
    };
  });

  return (
    <Container>
      <QueueCard
        callQueue={callQueue}
        currentCall={currentCall}
        setCallQueue={setCallQueue}
        setCurrentCall={setCurrentCall}
      />
    </Container>
  );
};

export default HomeScreen;
