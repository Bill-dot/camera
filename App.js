import React from 'react';
import{View, Text,StyleSheet} from 'react-native'
import DemoCamera from './src/components/DemoCamera';

const App=()=>{
  return(
    <View style={styles.container}>
      <DemoCamera/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
export default App

