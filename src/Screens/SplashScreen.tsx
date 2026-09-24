import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function SplashScreen({navigation}:any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnboardingScreen');
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.logoName}>COMBAT<Text style={styles.boldText}>GO</Text></Text>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.tagLine}>
        Train · Track · Engage
      </Text>
    </View>
  );
}

export default SplashScreen;

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#23749c'
  },
  logo:{
    width:150,
    height:150,
    marginTop:20
  },
  logoName:{
    fontSize:30,
    color:'white',
  },
  boldText:{
    fontWeight:'bold',
  },
  tagLine:{
    fontSize:20,
    color:'white',
    marginTop:10
  }
})