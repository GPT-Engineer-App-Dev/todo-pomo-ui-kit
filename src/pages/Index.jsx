import React, { useState, useEffect } from "react";
import { Box, Heading, Input, Button, IconButton, Checkbox, HStack, VStack, Spacer, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaPause, FaPlay, FaRedo } from "react-icons/fa";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" textAlign="center">
        ⭐ Todo App ⭐
      </Heading>
      <HStack mt={4}>
        <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a new todo" />
        <IconButton icon={<FaPlus />} colorScheme="blue" onClick={handleAddTodo} />
      </HStack>
      <VStack mt={4} align="stretch" spacing={2}>
        {todos.map((todo, index) => (
          <HStack key={index}>
            <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(index)} />
            <Text textDecoration={todo.completed ? "line-through" : "none"}>{todo.text}</Text>
            <Spacer />
            <IconButton icon={<FaTrash />} colorScheme="red" size="sm" onClick={() => handleDeleteTodo(index)} />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(25 * 60);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" textAlign="center">
        Pomodoro Timer
      </Heading>
      <Text fontSize="6xl" fontWeight="bold" textAlign="center" mt={8}>
        {formatTime(time)}
      </Text>
      <HStack mt={8} justify="center">
        <Button colorScheme="yellow" onClick={handleToggle}>
          {isRunning ? <FaPause /> : <FaPlay />}
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button colorScheme="red" onClick={handleReset}>
          <FaRedo />
          Reset
        </Button>
      </HStack>
    </Box>
  );
};

const Index = () => {
  return (
    <VStack spacing={8}>
      <TodoApp />
      <PomodoroTimer />
    </VStack>
  );
};

export default Index;
