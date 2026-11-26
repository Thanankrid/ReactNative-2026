import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

export default function Section8() {
    const [booked, setBooked] = useState(false);

    const handlePress = () => {
        setBooked(!booked);
        if (!booked) {
            Alert.alert('Booking Confirmed!', 'You have reserved Standard Twin Room ($399.99/Night).');
        }
    };

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 15,
                borderTopWidth: 1,
                borderColor: '#e0e0e0',
            }}
        >
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 12 }}>Price</Text>
                <Text style={{ fontSize: 18, color: '#e5634d', fontWeight: 'bold' }}>$399.99</Text>
                <Text style={{ fontSize: 12 }}>AVG/Night</Text>
            </View>

            <TouchableOpacity
                activeOpacity={0.75}
                onPress={handlePress}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: booked ? '#2e7d32' : '#e5634d',
                    paddingVertical: 12,
                    paddingHorizontal: 22,
                    borderRadius: 25,
                    elevation: 4, // เงาบน Android
                    shadowColor: '#e5634d', // เงาบน iOS
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginRight: 8,
                    }}
                >
                    {booked ? 'Booked' : 'Book Now'}
                </Text>
                <FontAwesome6
                    name={booked ? 'circle-check' : 'arrow-right'}
                    size={16}
                    color="white"
                    iconStyle="solid"
                />
            </TouchableOpacity>
        </View>
    );
}