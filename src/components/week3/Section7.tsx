import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Room Type</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={{ width: 80, height: 80, borderRadius: 10 }}
                    source={require('@/assets/week3/room-8.jpg')}
                />
                <View style={{ paddingLeft: 15, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Standard Twin Room</Text>
                    <View>
                        <Text style={{ fontSize: 18, color: '#e5634d', fontWeight: 'bold' }}>$399.99</Text>
                        <Text style={{ fontSize: 12, color: '#2b9eb3' }}>Hurry Up! This is your last room!</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}