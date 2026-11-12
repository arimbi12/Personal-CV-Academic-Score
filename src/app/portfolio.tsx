import { ScrollView, StyleSheet, Text, View } from "react-native";
import portfolioData from "./data/profile.json";

export default function PortfolioScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Portfolio</Text>
      <Text style={styles.subtitle}>
        Beberapa proyek yang pernah saya kerjakan.
      </Text>

      {portfolioData.portfolio.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.category}>{item.kategori}</Text>
          <Text style={styles.projectTitle}>{item.judul}</Text>
          <Text style={styles.description}>{item.deskripsi}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FAF8",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#167D75",
    marginTop: 25,
  },
  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 8,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 3,
  },
  category: {
    color: "#159A8C",
    fontSize: 12,
    fontWeight: "bold",
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#263238",
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 8,
    lineHeight: 21,
  },
});
