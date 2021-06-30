import React from 'react';
import { Image, StyleSheet, ScrollView, View, Text } from 'react-native';

const style = StyleSheet.create({
    head: {
        backgroundColor: 'yellow',
        height: 100
    },
    text: {
        fontSize: 26,
        color: 'black',
        textAlign: 'center',
        padding: 50
    }, 
    container: {
         width: '100%',
         backgroundColor: "#fff8d9",
    },
    img: {
        width: 140,
        height: 140,
        borderRadius: 100,
        margin: 37
    },
    row: {
        flexDirection: 'row',
    }
});

const StoryScreen = () => {
    return (
        <ScrollView>
            <View  style={style.head}>
                <Text style={style.text}>ALL THE STORY</Text>
            </View>
          <View style={style.container}>
              <View style={style.row}>
            <Image
                style={style.img}
                source={require('../assets/avatar_femme_1.png')}>
            </Image>
            <Image
                style={style.img}
                source={require('../assets/avatar_femme_2.png')}>
            </Image>
            </View>


            <View style={style.row}>
            <Image
                style={style.img}
                source={require('../assets/avatar_homme_1.png')}>
            </Image>
            <Image
                style={style.img}
                source={require('../assets/avatar_homme_2.png')}>
            </Image>
            </View>

            <View style={style.row}>
            <Image
                style={style.img}
                source={require('../assets/avatar_femme_3.png')}>
            </Image>
            <Image
                style={style.img}
                source={require('../assets/avatar_femme_4.png')}>
            </Image>
            </View>

            <View style={style.row}>
            <Image
                style={style.img}
                source={require('../assets/avatar_homme_3.png')}>
            </Image>
            <Image
                style={style.img}
                source={require('../assets/avatar_femme_5.png')}>
            </Image>
            </View>

            <View style={style.row}>
            <Image
                style={style.img}
                source={require('../assets/avatar_femme_6.png')}>
            </Image>
            <Image
                style={style.img}
                source={require('../assets/avatar_femme_7.png')}>
            </Image>
            </View>

            <Image
                style={style.img}
                source={require('../assets/avatar_femme_4.png')}>
            </Image>
          </View>
       
        </ScrollView>
    );
};

export default StoryScreen;