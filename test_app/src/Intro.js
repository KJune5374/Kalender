import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Pic from "./Pic.js";

function Intro({navigation}) {

  return (
    <View style={styles.container}>
      <Text>인트로 페이지(임시) </Text>
      <Pic />
      <View style={styles.formContainer}>
        <Text>음식 이름 리스트: (임시)</Text>
      </View>
      <View style={styles.formContainer}>
        <Text>Kcal, 탄수화물, 단백질, 지방 (임시)</Text>
      </View>
      <View style={styles.formContainer}>
        <Button title="캘린더에 저장하기" onPress={() => navigation.navigate('calendar')}/>
        <Button title="카톡으로 공유하기" onPress={() => navigation.navigate('SharePage')}/>
        <Button title="결과 보기" onPress={() => navigation.navigate('result')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16
  },
  formContainer: {
    alignSelf: "stretch",
    marginTop: 16
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 8
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 8
  }
});

export default Intro;
