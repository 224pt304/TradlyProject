import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const SlideShow = (props) => {
  const { data } = props;

  return (
    <View style={{
      height: '100%',
    }}>
      <Swiper showsButtons={false} autoplay showsPagination={true} autoplayTimeout={3}>
        {data.map((imag, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.image} source={{ uri: imag }} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({

  image: {
    backgroundColor: 'white',
    width: 302,
    height: 165,
    alignSelf: 'center',
    borderRadius: 10
  },
});

export default SlideShow;
