import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

function Complete({ picture, text }) {

  const url = "/complete"

  return (
    <View>
      <View>
      <Text>
          yyyy년 m월 d일 아침 페이지 (임시)
      </Text>
      </View>
      {/* calendar.js, Dropdown.js 에서 결정된 값 */}
      <View>
        <Image source={{ uri: picture }} style={{ width: 200, height: 200 }} />
      </View>
      <View>
        <Text>음식 이름 리스트</Text>
      </View>
      <View>
      <Text>Kcal: {complete.calories}, 탄수화물: {complete.carbonate}, 단백질: {complete.protain}, 지방: {complete.fat}</Text>
      </View>
      <View>
      <Text>TXT</Text>
      </View>
      <TouchableOpacity>
        <Text>편집</Text>
      </TouchableOpacity>
      {/* 라우트 컴포넌트? 다른 방식? */}
      <TouchableOpacity>
        <Text>뒤로 가기</Text>
      </TouchableOpacity>
      {/* 뒤로 가기 */}
    </View>
  );
}

export default Complete;
