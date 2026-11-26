import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import React from 'react';
import { Text, View } from 'react-native';

export default function ReviewSummary() {
    const ratingBars = [
        { stars: 5, percent: 80 },
        { stars: 4, percent: 35 },
        { stars: 3, percent: 20 },
        { stars: 2, percent: 10 },
        { stars: 1, percent: 5 },
    ];

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            {/* ฝั่งซ้าย: คะแนนเฉลี่ย */}
            <View style={{ alignItems: 'center', paddingRight: 20 }}>
                <Text style={{ fontSize: 44, color: '#e5634d', fontWeight: '300' }}>4.7</Text>
                <Text style={{ fontSize: 14, color: 'gray' }}>out of 5</Text>
            </View>

            {/* ฝั่งขวา: แถบกราฟดาว 5 ระดับ */}
            <View style={{ flex: 1 }}>
                {ratingBars.map((item) => (
                    <View
                        key={item.stars}
                        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}
                    >
                        {/* ไอคอนดาวชิดขวา */}
                        <View
                            style={{
                                width: 65,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                marginRight: 8,
                            }}
                        >
                            {Array.from({ length: item.stars }).map((_, index) => (
                                <FontAwesome6
                                    key={index}
                                    name="star"
                                    size={10}
                                    color="gray"
                                    iconStyle="solid"
                                    style={{ marginLeft: 1 }}
                                />
                            ))}
                        </View>

                        {/* หลอดเปอร์เซ็นต์ */}
                        <View
                            style={{
                                flex: 1,
                                height: 6,
                                backgroundColor: '#e0e0e0',
                                borderRadius: 3,
                                overflow: 'hidden',
                            }}
                        >
                            <View
                                style={{
                                    width: `${item.percent}%`,
                                    height: '100%',
                                    backgroundColor: '#e5634d',
                                    borderRadius: 3,
                                }}
                            />
                        </View>
                    </View>
                ))}
                <Text style={{ textAlign: 'right', fontSize: 12, color: '#333', marginTop: 4 }}>
                    25 Ratings
                </Text>
            </View>
        </View>
    );
}