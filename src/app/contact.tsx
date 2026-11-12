import React, { useState } from "react";
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function ContactScreen() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const kirimPesan = () => {
    if (!nama.trim() || !email.trim() || !pesan.trim()) {
      Alert.alert("Peringatan", "Semua kolom harus diisi!");
      return;
    }

    const formatEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatEmail.test(email)) {
      Alert.alert("Peringatan", "Masukkan alamat email yang valid!");
      return;
    }

    Alert.alert(
      "Pesan Berhasil",
      `Terima kasih ${nama}, pesan kamu berhasil dikirim!`,
    );

    setNama("");
    setEmail("");
    setPesan("");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>

      <Text style={styles.subtitle}>
        Silakan hubungi saya melalui formulir berikut.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama kamu"
          value={nama}
          onChangeText={setNama}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan email kamu"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Pesan</Text>
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Tulis pesan kamu di sini..."
          value={pesan}
          onChangeText={setPesan}
          multiline
          textAlignVertical="top"
        />

        <Pressable style={styles.button} onPress={kirimPesan}>
          <Text style={styles.buttonText}>Kirim Pesan</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>© 2026 Arimbi Salsabila</Text>
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
    borderRadius: 18,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#263238",
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#F4F8F7",
    borderWidth: 1,
    borderColor: "#DCECE9",
    borderRadius: 10,
    padding: 13,
    fontSize: 14,
  },
  messageInput: {
    height: 120,
  },
  button: {
    backgroundColor: "#167D75",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 22,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  footer: {
    textAlign: "center",
    color: "#64748B",
    marginTop: 25,
    marginBottom: 30,
  },
});
