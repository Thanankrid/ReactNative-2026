import React from 'react';
import { View } from 'react-native';

export default function Extra1() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {/* ส่วนบน (flex: 1) สีครีม */}
      <View style={{ flex: 1, backgroundColor: '#FFEBB6' }} />

      {/* ส่วนล่าง (flex: 2) แบ่งซ้าย-ขวา */}
      <View style={{ flex: 2, flexDirection: 'row' }}>
        {/* ฝั่งซ้าย (flex: 1) สีเขียว */}
        <View style={{ flex: 1, backgroundColor: '#8BD7B1' }} />

        {/* ฝั่งขวา (flex: 2) แบ่งบน-ล่าง */}
        <View style={{ flex: 2, flexDirection: 'column' }}>
          {/* กล่องบน (flex: 1) สีแดง */}
          <View style={{ flex: 1, backgroundColor: '#FE706E' }} />

          {/* กล่องล่าง (flex: 1) แบ่งซ้าย-ขวาเท่ากัน */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, backgroundColor: '#FFCB65' }} />
            <View style={{ flex: 1, backgroundColor: '#FE706E' }} />
          </View>
        </View>
      </View>
    </View>
  );
}