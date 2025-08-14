import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  ImagePickerResponse,
  launchImageLibrary,
} from "react-native-image-picker";
import Icon from "react-native-vector-icons/Ionicons";
import { usePhotoStore } from "../store/photoStore";
import { useUserStore } from "../store/userStore";

export default function StudantCard() {
  const { photoUri, setPhoto } = usePhotoStore();
  const { name, email } = useUserStore((state) => state.user);

  const pickImage = () => {
    launchImageLibrary(
      { mediaType: "photo", quality: 0.8 },
      (response: ImagePickerResponse) => {
        if (response.assets && response.assets.length > 0) {
          setPhoto(response.assets[0].uri || null);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/qr_code.webp")}
        style={styles.qrCode}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <View style={styles.row}>
          <TouchableOpacity onPress={pickImage} style={styles.photoWrapper}>
            {photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.photo} />
            ) : (
              <View style={styles.iconContainer}>
                <Icon name="person-circle-outline" size={80} color="#fff" />
              </View>
            )}
          </TouchableOpacity>

          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.course}>Ciência da Computação</Text>
            <Text style={styles.ra}>25061101</Text>
          </View>
        </View>

        <View style={styles.containerLogo}>
          <Image
            source={require("../assets/iesb-white.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.actions}>
          <View style={styles.action}>
            <Icon name="share-social-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>Compartilhar</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoText}>Matrícula: 25061101</Text>
        <Text style={styles.infoText}>Email: {email}</Text>
        <Text style={styles.infoText}>Instituição: IESB NORTE</Text>
        <Text style={styles.infoText}>RG: 5093076 - SSP/DF</Text>
        <Text style={styles.infoText}>Situação: ATIVO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#c62828",
    borderRadius: 16,
    padding: 16,
    width: "100%",
    maxWidth: 400,
    height: 200,
    justifyContent: "space-between",
    marginVertical: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  photoWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#fff",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  course: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 2,
  },
  ra: {
    fontSize: 13,
    color: "#fff",
  },
  logo: {
    width: 60,
    height: 40,
    marginLeft: 8,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginTop: 12,
  },
  containerLogo: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    color: "#fff",
    marginLeft: 4,
    alignItems: "center",
  },
  qrCodeContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  qrCode: {
    width: 300,
    height: 300,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
  },
  infoCards: {
    marginVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },
});
