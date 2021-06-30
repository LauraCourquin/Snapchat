import React from 'react';
import { Text, View } from 'react-native';

const ConversationScreen = props => {
    const username = props.navigation.getParam('username');
return (
        <View style={{ padding: 10 }}>
            <Text>This is a conversation with {username} ! Say hello</Text>
        </View>
    );
};
export default ConversationScreen;