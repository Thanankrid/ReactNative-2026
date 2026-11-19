import React from 'react';
import { View } from 'react-native';

export default function Extra2() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {/* แถบซ้ายสุด (flex: 1) สีครีม */}
      <View style={{ flex: 1, backgroundColor: '#FFEBB6' }} />

      {/* พื้นที่ฝั่งขวาทั้งหมด (flex: 3) แบ่งบน-ล่าง */}
      <View style={{ flex: 3, flexDirection: 'column' }}>
        {/* กล่องบน (flex: 1) สีเขียว */}
        <View style={{ flex: 1, backgroundColor: '#8BD7B1' }} />

        {/* พื้นที่ส่วนล่าง (flex: 2) แบ่งซ้าย-ขวา */}
        <View style={{ flex: 2, flexDirection: 'row' }}>
          {/* แถบซ้ายของส่วนล่าง (flex: 1) สีแดง */}
          <View style={{ flex: 1, backgroundColor: '#FE706E' }} />

          {/* คอลัมน์ขวาสุด (flex: 2) แบ่งกล่องเหลืองและแดงบน-ล่าง */}
          <View style={{ flex: 2, flexDirection: 'column' }}>
            <View style={{ flex: 1, backgroundColor: '#FFCB65' }} />
            <View style={{ flex: 1, backgroundColor: '#FE706E' }} />
          </View>
        </View>
      </View>
    </View>
  );
}