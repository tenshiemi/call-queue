import React, { useEffect, useState } from "react";
import QueueCard from "../components/QueueCard";
import { Container } from "./HomeScreen.styles";

const ws = new WebSocket("ws://localhost:7777");

export const HomeScreen = () => {
  const [callQueue, setCallQueue] = useState([]);

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
    ws.onmessage = event => {
      const message = JSON.parse(event.data)
      message.priority && setCallQueue([...callQueue, message])
    }
  }, [callQueue]);

  return (
    <Container>
      <QueueCard callQueue={callQueue} setCallQueue={setCallQueue} />
    </Container>
  );
};

export default HomeScreen;
