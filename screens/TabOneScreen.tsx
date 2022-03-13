import React from "react";
import { View, Image, Text, Dimensions } from "react-native";

export default function TabOneScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#273746',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View style={{
        height: Dimensions.get('screen').height * 0.5,
        width: '80%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
      }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
            marginBottom: 10,
            borderRadius: 10,
            overflow: 'hidden'
          }}
        >
          <Image
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover'
            }}
            source={require('../assets/images/goldenwind.jpg')}
          />
        </View>
        <View
          style={{
            flex: 0,
            backgroundColor: '#E9DBD8',
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: '#877D7B',
              fontFamily: 'poppins-bold',
              fontSize: 18,
            }}
            numberOfLines={1}
          >
            My NFT Card
          </Text>
        </View>
        <View
          style={{
            flex: 0,
            minHeight: 100,
            maxHeight: 200,
            backgroundColor: 'white',
            padding: 5,
          }}
        >
          <Text
            style={{
              fontFamily: 'poppins-regular',
              color: '#877D7B',
              fontSize: 14
            }}
          >
            Golden Wind, also known as Vento Aureo, is the fifth story arc of the Japanese manga series JoJo's Bizarre Adventure, written and illustrated by Hirohiko Araki. It was serialized in Weekly Shōnen Jump for a little under 4 years, from November 20, 1995, to April 5, 1999.
          </Text>
        </View>
      </View>
    </View>
  );
}