import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../navigation/types';
import colors from '../theme/colors';

// Defina o tipo para a navegação
type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
      <Button title="Entrar" color={colors.primary} onPress={() => navigation.navigate('Painel')} />
      <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}>
        Criar conta
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, color: colors.primary },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 10 },
  link: { color: colors.primary, marginTop: 20, textAlign: 'center' },
});