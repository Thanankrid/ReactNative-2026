import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: false, // ปิดการโปร่งใสไม่ให้เนื้อหาไหลไปซ้อนข้างหลัง
      }}
    />
  );
}