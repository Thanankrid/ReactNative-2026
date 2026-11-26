import React from 'react';
import { Text, View } from 'react-native';

export default function Section3() {
    return (
        <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
            <View
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                    backgroundColor: '#e5634d',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>9.5</Text>
            </View>
            <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 18, color: '#e5634d' }}>Excellent</Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>See 801 reviews</Text>
            </View>
        </View>
    );
}