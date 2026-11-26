import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View
            style={{
                flexDirection: 'column',
                paddingVertical: 15,
                marginHorizontal: 15,
                borderBottomWidth: 1,
                borderColor: '#e0e0e0',
            }}
        >
            <Text style={{ fontSize: 18 }}>Location</Text>
            <Text style={{ fontSize: 12, color: 'gray', marginVertical: 5 }}>
                218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et...
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Image
                    style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 6 }}
                    source={require('@/assets/week3/map.jpg')}
                />
            </View>
        </View>
    );
}