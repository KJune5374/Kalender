import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, TextInput, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from "./Dropdown";
import image from "./Intro";
import axios from "axios";

function Result({navigation}) {
  const [nutrientInfo, setNutrientInfo] = useState("");
  const [selectedOption, setSelectedOption] = useState("Dropdown");

  // axios 이용한 FastAPI 연결
  const [food, setData] = React.useState([]);
  const url = "http://192.168.50.180:8080/result";
  React.useEffect(() => {
          axios.get(url)
          .then(res => setData(res.data))});

  // redux 이용한 state 선언
  
  const dispatch = useDispatch();
  const image = useSelector(state => state.image);

  useEffect(() => {
    dispatch({type: "UPDATE_IMAGE", payload: image});
  }, [dispatch, image]);
  
  return (
    <View style={styles.container}>
      <Text>결과 페이지 (임시)</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.formContainer}>
        <Text>음식 이름: {food?.food_name}</Text>
        <Text>영양 정보: </Text>
        <Text>
          Kcal: {food[0]?.calories},{"\n"}
          탄수화물: {food[0]?.carbohydrates}, {"\n"}
          단백질: {food[0]?.protein}, {"\n"}
          지방: {food[0]?.fat}, {"\n"}
          중량: {food[0]?.weight}
          </Text>
        <Dropdown
          selectedOption={selectedOption}
        />
      </View>
      <View style={styles.formContainer}>
        <Button title="캘린더에 저장하기" onPress={() => navigation.navigate('calendar')} />
        <Button title="카톡으로 공유하기" onPress={() => navigation.navigate('SharePage')} />
        <Button title="뒤로 가기" onPress={() => navigation.goBack()} />
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
  userimg: {
    width: 200,
    height: 200,
    marginTop: 8
  }
});
export default Result;
