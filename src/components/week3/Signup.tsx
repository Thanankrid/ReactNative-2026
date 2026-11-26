import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Signup() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up Form</Text>
            <TextInput style={styles.input} placeholder="Input ID" />
            <TextInput style={styles.input} placeholder="Input Email" keyboardType="email-address" />
            <TextInput style={[styles.input, { marginBottom: 15 }]} placeholder="Input Address" />
            <Button title="Sign up" color="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        fontSize: 18,
        marginTop: 10,
        borderWidth: 1,          // ความหนาของเส้นขอบ (จำเป็นต้องมีเพื่อให้เห็นกรอบ)
        borderColor: '#ccc',     // สีของเส้นขอบ
        borderRadius: 8,         // ความโค้งมนของมุม
        paddingHorizontal: 12,   // ระยะห่างข้อความซ้าย-ขวา
        paddingVertical: 10,     // ระยะห่างข้อความบน-ล่าง
        backgroundColor: '#fff', // สีพื้นหลังช่องกรอก
    },
});