import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../navigation/types";
import { useUserStore } from "../store/userStore";
import colors from "../theme/colors";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const setUser = useUserStore((state) => state.setUser);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!name || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    setUser({
      name,
      password,
      email: "25061101@iesb.com.br",
    });

    Alert.alert("Sucesso", "Bem vindo!");
    navigation.navigate("Painel");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-iesb.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.label}>Matrícula:</Text>
      <TextInput
        placeholder=""
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        placeholder=""
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.link} onPress={() => navigation.navigate("Cadastro")}>
        Não sou aluno
      </Text>

      <Text style={styles.footer}>iesb.br</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 60
  },
  logo: {
    width: 250,
    marginBottom: 5,
  },
  subtitle: {
    textAlign: "center",
    color: "#888",
    marginBottom: 30,
    fontSize: 14,
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
    fontSize: 14,
    color: "#000",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    color: colors.primary,
    marginTop: 20,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    color: colors.primary,
  },
});
