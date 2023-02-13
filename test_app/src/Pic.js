import React, { useState, useEffect } from 'react';
import { View, Image, Button, Alert, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import AWS from 'aws-sdk';
import { useDispatch } from 'react-redux';
import { updateImage } from './action';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadImage = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  const key = `usersimg/usersimg-${year}.${month}.${day}-${hours}${minutes}${seconds}.jpg`;

  const params = {
    Bucket: 'image-from-client',
    Key: key,
    Body: blob,
    ContentType: 'image/jpeg',
    ACL: 'public-read',
  };

  try {
    await s3.upload(params).promise();
    return key;
  } catch (error) {
    console.error(error);
  }
};


const Pic = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Save the image to the Redux store
    dispatch(updateImage(image));
  }, [dispatch, image]);

  const getPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      Alert.alert(
        '카메라와 갤러리에 대한 권한이 필요합니다.',
        '권한이 주어지지 않으면 서비스 이용에 제한이 있을 수 있습니다.',
        [{ text: 'OK' }],
      );
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const permissionGranted = await getPermissionAsync();
    if (!permissionGranted) {
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      const key = await uploadImage(result.uri);
      console.log(key);
      setModalVisible(false);
    }
  };

  const takePicture = async () => {
    const permissionGranted = await getPermissionAsync();
    if (!permissionGranted) {
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      const key = await uploadImage(result.uri);
      console.log(key);
      setModalVisible(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="사진 업로드" onPress={() => setModalVisible(true)} />
      <Button title="결과 보기" onPress={() => navigation.navigate('result')} />
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="사진 촬영" onPress={takePicture} />
          <Button title="갤러리" onPress={pickImage} />
          <Button title="취소" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default Pic;
