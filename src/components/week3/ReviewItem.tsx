import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function ReviewItem(props: any) {
    return (
        <View
            style={{
                backgroundColor: '#f5f5f5',
                borderRadius: 12,
                padding: 15,
                marginTop: 15,
            }}
        >
            {/* ส่วนหัวการ์ด: รูปโปรไฟล์ + ชื่อ + ดาว + วันที่ */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 45, height: 45, borderRadius: 45 / 2 }}
                        source={props.avatar}
                    />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 3 }}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FontAwesome6
                                    key={star}
                                    name="star"
                                    size={12}
                                    color={star <= props.rating ? 'orange' : '#cccccc'}
                                    iconStyle="solid"
                                    style={{ marginRight: 2 }}
                                />
                            ))}
                        </View>
                    </View>
                </View>

                <Text style={{ fontSize: 12, color: 'gray' }}>{props.date}</Text>
            </View>

            {/* ส่วนเนื้อหารีวิว */}
            <View style={{ marginTop: 12 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 4 }}>
                    {props.title}
                </Text>
                <Text style={{ fontSize: 12, color: '#555555', lineHeight: 18 }}>
                    {props.comment}
                </Text>
            </View>
        </View>
    );
}