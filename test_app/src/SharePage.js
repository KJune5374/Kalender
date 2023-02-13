import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";

function SharePage({ picture }) {
  const [food, setData] = React.useState([]);
  const url = "http://192.168.50.180:8080/SharePage";
  React.useEffect(() => {
	  axios.get(url)
	  .then(res => setData(res.data))});

    const dispatch = useDispatch();
    const image = useSelector(state => state.image);
  
    useEffect(() => {
    dispatch({type: "UPDATE_IMAGE", payload: image});
  }, [dispatch, image]);
  
  return (
    <View>
      <View style={styles.formContainer}> 
      <Text>공유 페이지 (임시)</Text>
      </View>
      <View style={styles.formContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
      <Text>음식 이름 리스트</Text>
      </View>
	<View style={styles.formContainer}>
        <Text>Kcal: {food[0]?.calories} 탄수화물: {food[0]?.carbohydrates}     단백질: {food[0]?.protein} 지방: {food[0]?.fat}</Text>
        </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16
  },
  formContainer: {
    alignSelf: "center",
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


export default SharePage;
