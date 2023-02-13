import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from "axios";

function SharePage({ picture }) {
  const [food, setData] = React.useState([]);
  const url = "http://192.168.50.180:8080/SharePage";
  React.useEffect(() => {
	  axios.get(url)
	  .then(res => setData(res.data))});
  return (
    <View>
      <View style={styles.formContainer}> 
      <Text>공유 페이지 (임시)</Text>
      </View>
      <View style={styles.formContainer}>
      <Text>uploaded image:</Text>
      <Image source={{uri: "https://t4.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4Rt4/image/ufkfI9OvZh0eEWwiHjEYuhqEiio.jpg"}} />
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


export default SharePage;
