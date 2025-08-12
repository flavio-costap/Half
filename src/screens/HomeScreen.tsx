import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Icon from "react-native-vector-icons/Entypo";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.jpeg";
import e3 from "../assets/e3.webp";
import e4 from "../assets/e4.webp";
import e5 from "../assets/e5.webp";
import e6 from "../assets/e6.webp";
import colors from "../theme/colors";

const { width: screenWidth } = Dimensions.get("window");

export default function HomeScreen() {
  // const { name, email } = useUserStore((state) => state.user);

  const menuOptions = [
    { id: "1", title: "Carteirinha", icon: "fingerprint" },
    { id: "2", title: "Grade Horária", icon: "calendar" },
    { id: "3", title: "Pagamentos", icon: "credit-card" },
    { id: "4", title: "Perfil", icon: "user" },
  ];

  const news = [
    {
      id: "1",
      title: "Inscrições para o evento Nutrição Brasil 2025",
      date: "10 Jan 2025",
      image: e1,
    },
    {
      id: "2",
      title: "Obon Matsuri festival Brasília 2025",
      date: "15 Jan 2025",
      image: e2,
    },
    {
      id: "3",
      title: "Semana cultural traz peças e apresentações musicais",
      date: "20 Jan 2025",
      image: e3,
    },
    {
      id: "4",
      title: "Novo laboratório de inovação é inaugurado",
      date: "25 Jan 2025",
      image: e4,
    },
    {
      id: "5",
      title: "Abertas inscrições para curso de idiomas gratuito",
      date: "28 Jan 2025",
      image: e5,
    },
    {
      id: "6",
      title: "Campeonato de e-sports agita a comunidade acadêmica",
      date: "30 Jan 2025",
      image: e6,
    },
  ];

  const notices = [
    {
      id: "1",
      date: "19 Ago",
      text: "Proposta para reposição de provas e encontros presenciais do EAD",
    },
    { id: "2", date: "03 Abr", text: "Resultados dos pedidos de auxílio" },
    {
      id: "3",
      date: "21 Ago",
      text: "Encontro dos jogadores profissionais de truco online",
    },
    {
      id: "4",
      date: "03 Set",
      text: "Último dia para cadastro nas tumas de TLGA",
    },
    { id: "5", date: "02 Set", text: "Exposição 'Atos'" },
    {
      id: "6",
      date: "05 Set",
      text: "Registro dos pedidos auxiliares temporários",
    },
  ];


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.menuContainer}>
          {menuOptions.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <Icon name={item.icon} size={32} color={colors.primary} />
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Text style={styles.sectionTitle}>Últimas notícias</Text>
      <Carousel
        loop
        width={screenWidth * 0.90}
        height={135}
        autoPlay
        autoPlayInterval={3000}
        data={news}
        scrollAnimationDuration={800}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Image source={item.image} style={styles.newsImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDate}>{item.date}</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.sectionTitle}>Avisos</Text>
      <View style={styles.card}>
        {notices.map((item) => (
          <View key={item.id} style={styles.noticeItem}>
            <View style={styles.noticeDate}>
              <Text style={styles.noticeDay}>{item.date.split(" ")[0]}</Text>
              <Text style={styles.noticeMonth}>{item.date.split(" ")[1]}</Text>
            </View>
            <Text style={styles.noticeText}>{item.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 16 },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuItem: { alignItems: "center", flex: 1 },
  menuText: { marginTop: 5, fontSize: 12, textAlign: "center" },

  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },

  newsCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsItem: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 10,
  margin: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},
newsImage: {
  width: 80,
  height: 80,
  borderRadius: 8,
  marginRight: 10,
},
newsTitle: {
  fontSize: 14,
  fontWeight: "500",
  marginBottom: 4,
},
newsDate: {
  fontSize: 12,
  color: "#888",
},
  carouselImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  newsText: { fontSize: 14, fontWeight: "500", textAlign: "center" },

  noticeItem: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  noticeDate: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    width: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  noticeDay: { fontSize: 14, color: "#fff", fontWeight: "bold" },
  noticeMonth: { fontSize: 12, color: "#fff" },
  noticeText: { flex: 1, fontSize: 14 },
});
