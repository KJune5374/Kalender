import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

function DropDown() {
  const [selectedOption, setSelectedOption] = useState('Dropdown');

  return (
    <Picker
      selectedValue={selectedOption}
      onValueChange={(itemValue) => setSelectedOption(itemValue)}
    >
      <Picker.Item label="식사 시간을 선택해 주세요" value="default" />
      <Picker.Item label="아침" value="breakfast" />
      <Picker.Item label="점심" value="lunch" />
      <Picker.Item label="저녁" value="dinner" />
      <Picker.Item label="야식" value="late-night-snacks" />
    </Picker>
  );
}

export default DropDown;
