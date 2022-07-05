import React from "react";
import { View, Text } from 'react-native';
import GridView from "./src/GridView";
const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GridView />
    </View>
  )
}

export default App;