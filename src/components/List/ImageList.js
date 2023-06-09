import React, {useEffect} from 'react';
import styled from 'styled-components';
import {FlatList, Image} from 'react-native';
import {windowWidth} from '../../utils/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import {ImageListState} from '../../state/RecoilState';
import {useRecoilState} from 'recoil';
import {Text} from '@rneui/themed';

export const ImageList = () => {
  const navigation = useNavigation();
  const [imageListState, setImageListState] = useRecoilState(ImageListState);

  if (imageListState.length !== 0) {
    return (
      <Container>
        <FlatList
          data={imageListState}
          navigation={navigation}
          renderItem={item => <List data={item.item} navigation={navigation} />}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
        />
      </Container>
    );
  } else {
    return (
      <TextBox>
        <Text>이미지가 존재하지 않습니다.</Text>
      </TextBox>
    );
  }
};

const Container = styled.View`
  width: ${Math.round(windowWidth * 0.96)};
  margin: 0 auto;
  margin-top: 10px;
`;

const TextBox = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  flex: 1;
`;

const List = ({data, navigation}) => {
  console.log('이미지리스트', data);
  return (
    <ImageBox
      onPress={() => {
        navigation.navigate('ImageDetail', {
          imageId: data.imageId,
          imageUrl: data.fileName,
        });
      }}
      key={data.imageId}>
      <Image
        source={{uri: data.fileName}}
        style={{
          width: Math.round(windowWidth * 0.32) - 10,
          height: Math.round(windowWidth * 0.32) - 10,
        }}
        resizeMode="cover"
      />
    </ImageBox>
  );
};

const ImageBox = styled.TouchableOpacity`
  padding: 5px;
`;
