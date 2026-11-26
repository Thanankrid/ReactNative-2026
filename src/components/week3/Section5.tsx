import MyIcon from '@/components/week3/MyIcon';
import React from 'react';
import { View } from 'react-native';

export default function Section5() {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 10,
                paddingBottom: 15,
                marginHorizontal: 15,
                borderBottomWidth: 1,
                borderColor: '#e0e0e0',
            }}
        >
            <MyIcon title="wifi" name="wifi" size={22} color="#5d8aa8" />
            <MyIcon title="coffee" name="mug-saucer" size={22} color="#5d8aa8" />
            <MyIcon title="bath" name="bath" size={22} color="#5d8aa8" />
            <MyIcon title="car" name="car" size={22} color="#5d8aa8" />
            <MyIcon title="paw" name="paw" size={22} color="#5d8aa8" />
        </View>
    );
}