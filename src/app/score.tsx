import { ScrollView, StyleSheet, Text, View } from "react-native";
import scoreData from "./data/score.json";

export default function ScoreScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Academic Score</Text>
      <Text style={styles.subtitle}>Pemrograman Mobile 2</Text>

      <View style={styles.scoreCard}>
        <Text style={styles.label}>Current Score</Text>
        <Text style={styles.score}>{scoreData.nilai}</Text>
        <Text style={styles.grade}>Grade {scoreData.grade}</Text>
        <Text style={styles.lecturer}>Dosen: {scoreData.dosen}</Text>
        <Text style={styles.points}>
          {scoreData.learningPoints.toLocaleString("id-ID")} LP
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Learning Progress</Text>

      {scoreData.progress.map((item) => (
        <View key={item.id} style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressName}>{item.nama}</Text>
            <Text style={styles.percentage}>{item.persentase}%</Text>
          </View>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                { width: `${item.persentase}%` as `${number}%` },
              ]}
            />
          </View>
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
    fontSize: 27,
    fontWeight: "bold",
    color: "#167D75",
    marginTop: 25,
  },
  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 6,
    marginBottom: 20,
  },
  scoreCard: {
    backgroundColor: "#167D75",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 25,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  score: {
    color: "#FFFFFF",
    fontSize: 55,
    fontWeight: "bold",
    marginTop: 5,
  },
  grade: {
    color: "#D1FAE5",
    fontSize: 20,
    fontWeight: "bold",
  },
  lecturer: {
    color: "#FFFFFF",
    marginTop: 12,
  },
  points: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#263238",
    marginBottom: 15,
  },
  progressCard: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 15,
    marginBottom: 13,
    elevation: 2,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  progressName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#263238",
  },
  percentage: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#167D75",
  },
  progressBackground: {
    height: 9,
    backgroundColor: "#DCECE9",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: 9,
    backgroundColor: "#20A99A",
    borderRadius: 10,
  },
});
