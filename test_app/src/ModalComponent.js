import React from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ModalComponent = ({ visible, onClose, children }) => {
  return (
    <Modal animationType="fade" transparent={false} visible={modalVisible}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="사진 촬영" onPress={takePicture} />
      <Button title="갤러리" onPress={pickImage} />
      <Button title="취소" onPress={() => setModalVisible(false)} />
    </View>
  </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000080',
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default ModalComponent;
