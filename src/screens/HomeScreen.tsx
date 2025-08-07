import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useUserStore } from '../store/userStore';
import colors from '../theme/colors';

export default function HomeScreen() {
  const { name, email } = useUserStore((state) => state.user);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150' }}
        style={styles.image}
      />
      <Text style={styles.name}>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: 'bold', color: colors.primary },
});