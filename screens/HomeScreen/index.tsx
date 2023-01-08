import {Text, View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {ToDoCard} from '../../components';

const mockData = [
  {id: '13', name: 'test 1', amount: 10},
  {id: '22', name: 'test 2', amount: 10},
  {id: '33', name: 'test 3', amount: 10},
  {id: '44', name: 'test 4', amount: 10},
  {id: '54', name: 'test 5', amount: 10},
  {id: '64', name: 'test 6', amount: 10},
  {id: '74', name: 'test 7', amount: 10},
  {id: '84', name: 'test 8', amount: 10},
  {id: '86', name: 'test 8', amount: 10},
  {id: '87', name: 'test 8', amount: 10},
  {id: '88', name: 'test 8', amount: 10},
  {id: '89', name: 'test 8', amount: 10},
];

const HomeScreen = () => {
  const renderItem = ({item}: any) => (
    <ToDoCard name={item.name} amount={item.amount} />
  );

  return (
    <SafeAreaView className="mt-5">
      <FlatList
        className="p-3"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={mockData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
