import ReviewItem from '@/components/week3/ReviewItem';
import ReviewSummary from '@/components/week3/ReviewSummary';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { router } from 'expo-router';
import React from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Review() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 35 }}>
            {/* แถบ Header ด้านบน */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                    paddingVertical: 12,
                }}
            >
                <TouchableOpacity onPress={() => router.back()}>
                    <FontAwesome6 name="arrow-left" size={18} color="#e5634d" iconStyle="solid" />
                </TouchableOpacity>

                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Reviews</Text>

                <TouchableOpacity onPress={() => Alert.alert('Replay', 'Reply to reviews')}>
                    <Text style={{ fontSize: 15, color: '#e5634d' }}>Replay</Text>
                </TouchableOpacity>
            </View>

            {/* เนื้อหาหลัก */}
            <ScrollView style={{ paddingHorizontal: 15 }}>
                <ReviewSummary />

                <ReviewItem
                    avatar={require('@/assets/week3/profile-2.jpg')}
                    name="Grigoriy Kozhukhov"
                    rating={4}
                    date="Jun 2018"
                    title="Nice Place"
                    comment="Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo"
                />

                <ReviewItem
                    avatar={require('@/assets/week3/profile-2.jpg')}
                    name="Ea Tipene"
                    rating={4}
                    date="Jun 2018"
                    title="Great for families"
                    comment="Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo"
                />
            </ScrollView>
        </View>
    );
}