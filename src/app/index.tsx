import { useState } from "react";

import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import profileData from "./data/profile.json";
import scoreData from "./data/score.json";

export default function HomeScreen() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const kirimPesan = () => {
    if (!nama.trim() || !email.trim() || !pesan.trim()) {
      Alert.alert("Peringatan", "Semua kolom harus diisi!");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Peringatan", "Masukkan alamat email yang valid!");
      return;
    }

    Alert.alert(
      "Berhasil!",
      "Terima kasih " + nama + ", pesan kamu berhasil diproses.",
    );

    setNama("");
    setEmail("");
    setPesan("");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>MyPortfolio.</Text>
          <Text style={styles.headerTag}>STUDENT PORTFOLIO</Text>
        </View>

        {/* PROFILE */}
        <View style={styles.profileCard}>
          <View style={styles.photoContainer}>
            <Image
              source={require("../../assets/profile.jpeg")}
              style={styles.profileImage}
            />
          </View>

          <Text style={styles.greeting}>HELLO, I'M</Text>

          <Text style={styles.name}>{profileData.nama}</Text>

          <Text style={styles.profession}>{profileData.profesi}</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {profileData.prodi} • Semester {profileData.semester}
            </Text>
          </View>

          <Text style={styles.nim}>NIM: {profileData.nim}</Text>

          <Text style={styles.profileDescription}>
            Mahasiswa yang terus belajar, berkembang, dan mengeksplorasi
            teknologi.
          </Text>
        </View>

        {/* ABOUT */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>01 — ABOUT ME</Text>
          <Text style={styles.sectionTitle}>Tentang Saya</Text>

          <View style={styles.card}>
            <Text style={styles.description}>{profileData.deskripsi}</Text>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Program Studi</Text>
              <Text style={styles.infoValue}>{profileData.prodi}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Semester</Text>
              <Text style={styles.infoValue}>{profileData.semester}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{profileData.email}</Text>
            </View>
          </View>
        </View>

        {/* SKILLS */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>02 — MY SKILLS</Text>
          <Text style={styles.sectionTitle}>Keahlian Saya</Text>

          <View style={styles.skillContainer}>
            {profileData.skills.map((skill, index) => (
              <View style={styles.skillItem} key={index}>
                <Text style={styles.skillText}>✦ {skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* PORTFOLIO */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>03 — PORTFOLIO</Text>
          <Text style={styles.sectionTitle}>Proyek Saya</Text>

          {profileData.portfolio.map((item) => (
            <View style={styles.portfolioCard} key={item.id}>
              <Text style={styles.portfolioCategory}>{item.kategori}</Text>

              <Text style={styles.portfolioTitle}>{item.judul}</Text>

              <Text style={styles.description}>{item.deskripsi}</Text>
            </View>
          ))}
        </View>

        {/* MY SCORE */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>04 — ACADEMIC DASHBOARD</Text>
          <Text style={styles.sectionTitle}>My Score</Text>

          <View style={styles.scoreCard}>
            <Text style={styles.scoreLabel}>CURRENT SCORE</Text>

            <View style={styles.scoreRow}>
              <Text style={styles.scoreNumber}>{scoreData.nilai}</Text>

              <View style={styles.gradeBadge}>
                <Text style={styles.gradeText}>{scoreData.grade}</Text>
              </View>
            </View>

            <Text style={styles.courseName}>{scoreData.mataKuliah}</Text>

            <Text style={styles.lecturer}>Dosen: {scoreData.dosen}</Text>

            <View style={styles.divider} />

            <Text style={styles.lpLabel}>LEARNING POINTS</Text>

            <Text style={styles.lpNumber}>
              ⭐ {scoreData.learningPoints.toLocaleString("id-ID")} LP
            </Text>
          </View>

          <Text style={styles.progressHeading}>Learning Progress</Text>

          {scoreData.progress.map((item) => (
            <View style={styles.progressCard} key={item.id}>
              <View style={styles.progressTop}>
                <Text style={styles.progressName}>{item.nama}</Text>

                <Text style={styles.progressValue}>{item.persentase}%</Text>
              </View>

              <View style={styles.progressBackground}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${item.persentase}%` },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>

        {/* CONTACT */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>05 — CONTACT ME</Text>
          <Text style={styles.sectionTitle}>Hubungi Saya</Text>

          <View style={styles.card}>
            <Text style={styles.inputLabel}>Nama</Text>

            <TextInput
              style={styles.input}
              placeholder="Masukkan nama kamu"
              value={nama}
              onChangeText={setNama}
            />

            <Text style={styles.inputLabel}>Email</Text>

            <TextInput
              style={styles.input}
              placeholder="Masukkan email kamu"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.inputLabel}>Pesan</Text>

            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Tuliskan pesan kamu..."
              multiline
              value={pesan}
              onChangeText={setPesan}
            />

            <Pressable style={styles.sendButton} onPress={kirimPesan}>
              <Text style={styles.sendButtonText}>Kirim Pesan →</Text>
            </Pressable>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>ARIMBI SALSABILA</Text>

          <Text style={styles.footerText}>
            Personal CV & Academic Score App
          </Text>

          <Text style={styles.footerCopyright}>© 2026 All Rights Reserved</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FAF8",
  },

  header: {
    paddingHorizontal: 25,
    paddingTop: 55,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#167D70",
  },

  headerTag: {
    fontSize: 9,
    color: "#6A9990",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  profileCard: {
    backgroundColor: "#E1F3ED",
    marginHorizontal: 18,
    padding: 25,
    borderRadius: 25,
    alignItems: "center",
  },

  photoContainer: {
    width: 125,
    height: 125,
    borderRadius: 65,
    borderWidth: 5,
    borderColor: "#FFFFFF",
    overflow: "hidden",
    marginBottom: 20,
  },

  profileImage: {
    width: "100%",
    height: "100%",
  },

  greeting: {
    fontSize: 11,
    letterSpacing: 3,
    color: "#5B9589",
    fontWeight: "bold",
  },

  name: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#175E55",
    marginTop: 8,
    textAlign: "center",
  },

  profession: {
    color: "#56847A",
    fontSize: 14,
    marginTop: 6,
  },

  badge: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 20,
    marginTop: 18,
  },

  badgeText: {
    color: "#267C6F",
    fontSize: 12,
    fontWeight: "bold",
  },

  nim: {
    marginTop: 12,
    fontSize: 13,
    color: "#537F76",
  },

  profileDescription: {
    textAlign: "center",
    fontSize: 13,
    color: "#5D827A",
    lineHeight: 21,
    marginTop: 15,
  },

  section: {
    marginHorizontal: 20,
    marginTop: 35,
  },

  sectionNumber: {
    color: "#39998A",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  sectionTitle: {
    color: "#194F48",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 7,
    marginBottom: 17,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    elevation: 2,
  },

  description: {
    color: "#71827D",
    fontSize: 13,
    lineHeight: 22,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 17,
    paddingTop: 13,
    borderTopWidth: 1,
    borderTopColor: "#EDF2EF",
  },

  infoLabel: {
    color: "#81938D",
    fontSize: 12,
  },

  infoValue: {
    color: "#236E62",
    fontSize: 12,
    fontWeight: "bold",
  },

  skillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  skillItem: {
    backgroundColor: "#E2F3ED",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 15,
  },

  skillText: {
    color: "#267568",
    fontSize: 13,
    fontWeight: "600",
  },

  portfolioCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 14,
    elevation: 2,
  },

  portfolioCategory: {
    color: "#319787",
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 9,
  },

  portfolioTitle: {
    fontSize: 17,
    color: "#245A51",
    fontWeight: "bold",
    marginBottom: 9,
  },

  scoreCard: {
    backgroundColor: "#176F63",
    padding: 23,
    borderRadius: 23,
  },

  scoreLabel: {
    color: "#B9E4D9",
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: "bold",
  },

  scoreRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  scoreNumber: {
    color: "#FFFFFF",
    fontSize: 55,
    fontWeight: "bold",
  },

  gradeBadge: {
    backgroundColor: "#D4F2E5",
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 15,
    marginLeft: 18,
  },

  gradeText: {
    color: "#176F63",
    fontSize: 20,
    fontWeight: "bold",
  },

  courseName: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
  },

  lecturer: {
    color: "#C6E8DF",
    fontSize: 12,
    marginTop: 7,
  },

  divider: {
    height: 1,
    backgroundColor: "#57968B",
    marginVertical: 20,
  },

  lpLabel: {
    color: "#B9E4D9",
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: "bold",
  },

  lpNumber: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
  },

  progressHeading: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#245A51",
    marginTop: 25,
    marginBottom: 12,
  },

  progressCard: {
    backgroundColor: "#FFFFFF",
    padding: 17,
    borderRadius: 16,
    marginBottom: 12,
  },

  progressTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  progressName: {
    color: "#4D7168",
    fontSize: 13,
    fontWeight: "600",
  },

  progressValue: {
    color: "#278778",
    fontWeight: "bold",
    fontSize: 13,
  },

  progressBackground: {
    height: 9,
    backgroundColor: "#E5F0EB",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#45B49C",
    borderRadius: 10,
  },

  inputLabel: {
    color: "#316C60",
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 9,
    marginTop: 13,
  },

  input: {
    backgroundColor: "#F3F8F5",
    borderRadius: 12,
    padding: 14,
    fontSize: 13,
    color: "#315F55",
    borderWidth: 1,
    borderColor: "#E3EEE8",
  },

  messageInput: {
    height: 100,
    textAlignVertical: "top",
  },

  sendButton: {
    backgroundColor: "#238878",
    padding: 16,
    borderRadius: 13,
    alignItems: "center",
    marginTop: 20,
  },

  sendButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  footer: {
    backgroundColor: "#E1F3ED",
    marginTop: 40,
    padding: 30,
    alignItems: "center",
  },

  footerTitle: {
    color: "#236E62",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  footerText: {
    color: "#648B81",
    fontSize: 12,
    marginTop: 8,
  },

  footerCopyright: {
    color: "#91A9A1",
    fontSize: 11,
    marginTop: 15,
  },
});
