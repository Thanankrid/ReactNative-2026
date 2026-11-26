import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Edit app/index.tsx to edit this screen. THANAN{" "}
        </Text>

        <Link href="/flexbox/ex01" style={styles.link}>
          <Text style={styles.linkText}>Ex01</Text>
        </Link>
        <Link href="/flexbox/ex02" style={styles.link}>
          <Text style={styles.linkText}>Ex02</Text>
        </Link>
        <Link href="/flexbox/ex03" style={styles.link}>
          <Text style={styles.linkText}>Ex03</Text>
        </Link>
        <Link href="/flexbox/ex04" style={styles.link}>
          <Text style={styles.linkText}>Ex04</Text>
        </Link>
        <Link href="/flexbox/ex05" style={styles.link}>
          <Text style={styles.linkText}>Ex05</Text>
        </Link>
        <Link href="/flexbox/ex06" style={styles.link}>
          <Text style={styles.linkText}>Ex06</Text>
        </Link>
        <Link href="/flexbox/ex07" style={styles.link}>
          <Text style={styles.linkText}>Ex07</Text>
        </Link>
        <Link href="/flexbox/ex08" style={styles.link}>
          <Text style={styles.linkText}>Ex08</Text>
        </Link>
        <Link href="/flexbox/ex09" style={styles.link}>
          <Text style={styles.linkText}>Ex09</Text>
        </Link>
        <Link href="/flexbox/ex10" style={styles.link}>
          <Text style={styles.linkText}>Ex10</Text>
        </Link>
        <Link href="/flexbox/ex11" style={styles.link}>
          <Text style={styles.linkText}>Ex11</Text>
        </Link>
        <Link href="/flexbox/ex12" style={styles.link}>
          <Text style={styles.linkText}>Ex12</Text>
        </Link>
        <Link
          href="/flexbox/extra1"
          style={[styles.link, { backgroundColor: "#FF9800" }]}
        >
          <Text style={styles.linkText}>Extra 1</Text>
        </Link>
        <Link
          href="/flexbox/extra2"
          style={[styles.link, { backgroundColor: "#83a726" }]}
        >
          <Text style={styles.linkText}>Extra 2</Text>
        </Link>

        <Link href="/test-components" style={styles.link}>
          <Text style={styles.linkText}>Test Components</Text>
        </Link>

        <Link href="/test-greeting" style={styles.link}>
          <Text style={styles.linkText}>Test Greeting</Text>
        </Link>

        <Link href="/travel" style={styles.link}>
          <Text style={styles.linkText}>Travel</Text>
        </Link>

        <Link href="/resort" style={styles.link}>
          <Text style={styles.linkText}>Resort</Text>
        </Link>

        <Link href="/review" style={styles.link}>
          <Text style={styles.linkText}>Review</Text>
        </Link>

        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    marginBottom: 15,
    fontSize: 16,
  },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    width: 200,
  },
  linkText: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
  },
});
