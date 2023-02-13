import React, { useState } from "react";
import { View, Pressable, Text, Image } from "react-native";
import UploadModeModal from "./Modal";
import Pic from "./Pic";

const PPAP = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [image, setImage] = useState(null);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const launchCamera = async () => {
    const result = await Pic.takePictureAsync();
    setImage(result);
  };
  const launchImageLibrary = async () => {
    const result = await Pic.pickImageAsync();
    setImage(result);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable onPress={openModal}>
        <Text>Open Modal</Text>
      </Pressable>
      <UploadModeModal
        visible={isModalVisible}
        onClose={closeModal}
        onLaunchCamera={launchCamera}
        onLaunchImageLibrary={launchImageLibrary}
      />
      {image && (
        <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default PPAP;
