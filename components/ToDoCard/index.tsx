import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ToDoCardProps {
  name: string;
  amount: number;
}

const ToDoCard = ({name, amount}: ToDoCardProps) => {
  return (
    <TouchableOpacity className="flex-row justify-between p-6 mb-3 bg-white rounded">
      <Text className="text-bold">{name}</Text>
      <Text className="text-bold">{amount}</Text>
    </TouchableOpacity>
  );
};

export default ToDoCard;
