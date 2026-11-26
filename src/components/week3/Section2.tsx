import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import React from 'react';
import { Text, View } from 'react-native';

export default function Section2() {
    return (
        <View
            style={{
                flex: 1,
                marginTop: -25,
                marginHorizontal: 20,
                padding: 15,
                backgroundColor: '#f5f5f5',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#e0e0e0',
            }}
        >
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                Hilton San Francisco
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 5 }}>
                <FontAwesome6 name="star" size={15} color="orange" iconStyle="solid" />
                <FontAwesome6 name="star" size={15} color="orange" iconStyle="solid" />
                <FontAwesome6 name="star" size={15} color="orange" iconStyle="solid" />
                <FontAwesome6 name="star" size={15} color="orange" iconStyle="solid" />
                <FontAwesome6 name="star-half" size={15} color="orange" iconStyle="solid" />
            </View>
            <Text style={{ textAlign: 'center', color: 'gray', fontSize: 12 }}>
                Facilities provided may range from a modest quality mattress in a small room to large suites
            </Text>
        </View>
    );
}