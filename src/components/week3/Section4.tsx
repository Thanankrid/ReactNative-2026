import React from 'react';
import { Text, View } from 'react-native';

export default function Section4() {
    return (
        <View
            style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#e0e0e0',
                paddingVertical: 15,
                marginHorizontal: 15,
            }}
        >
            <Text style={{ fontSize: 18 }}>Hotel Description</Text>
            <Text style={{ fontSize: 12, color: 'gray', marginTop: 5 }}>
                218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
            </Text>
        </View>
    );
}