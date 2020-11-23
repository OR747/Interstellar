import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("./assets/img/imbb.png")}
        resizeMode="cover"
        style={styles.img}
      ></Image>
      <Text style={styles.text}>Interstellar</Text>
      <Text style={styles.text1}>
        2014 PG-13 2h49min Adventure,Drama,Sci-Fi
      </Text>
      <View style={styles.container1}>
        <Image
          source={require("./assets/img/interstellar.jpeg")}
          resizeMode="cover"
          style={styles.img1}
        ></Image>
        <View style={styles.container12}>
          <Text style={styles.text2}>
            A team of explorers travel through a wormhole in space in an attempt
            to ensure humanity's survival.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("NUL!")}
          >
            <Text style={styles.text3}>+ ADD TO WATCHLIST</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container2}>
        <Entypo name="star" size={32} color="#E6BA1E" />
        <Text style={styles.text3}>8.6/10</Text>
        <Entypo name="star-outlined" size={32} color="white" />
        <Text style={styles.text3}>RATE THIS</Text>
        <MaterialCommunityIcons
          name="numeric-9-plus-box"
          size={32}
          color="white"
          color="green"
        />
        <Text style={styles.text3}>METASCORE</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.text4}>Top Bill Cast</Text>
        <View style={styles.carroussel}>
          <View style={styles.card}>
            <Image
              source={require("./assets/img/Mc.jpg")}
              style={styles.img1}
            ></Image>
            <Text style={styles.text5}>Matthew McConaughey</Text>
            <Text style={styles.text6}>Cooper</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("./assets/img/Anna.jpg")}
              style={styles.img1}
            ></Image>
            <Text style={styles.text5}> Anne Hathaway</Text>
            <Text style={styles.text6}>Brand</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("./assets/img/Jessica.jpg")}
              style={styles.img1}
            ></Image>
            <Text style={styles.text5}> Jessica Chastain</Text>
            <Text style={styles.text6}> Murph</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("./assets/img/Ellen.jpg")}
              style={styles.img1}
            ></Image>
            <Text style={styles.text5}> Ellen Burstyn</Text>
            <Text style={styles.text6}> Murph (Older)</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("./assets/img/Foy.jpg")}
              style={styles.img1}
            ></Image>
            <Text style={styles.text5}>Mackenzie Foy</Text>
            <Text style={styles.text6}> Murph (10 Yrs.)</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text7}>Director</Text>
        <Text style={styles.text8}>Jonathan Nolan</Text>
        <Text style={styles.text7}>Writers</Text>
        <Text style={styles.text8}>
          Jonathan Nolan (written by) and Christopher Nolan (written by)
        </Text>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 80,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "grey",
    marginTop: 40,
    height: 100,
  },
  text: { fontSize: 24, color: "white", marginTop: 15 },
  text1: { color: "white", marginTop: 20 },
  img1: { height: 200, width: 150 },
  //container1//
  container1: { marginTop: 10 },
  container12: { marginTop: 10 },
  text2: { color: "white" },
  button: {
    marginTop: 10,
    backgroundColor: "#0477BD",
    width: 150,
    height: 30,
    borderRadius: 5,
    marginLeft: 50,
  },
  text3: { color: "white", marginTop: 7 },
  //container3//
  Container3: {},
  text4: { fontSize: 24, color: "white", marginTop: 20 },
  card: { marginTop: 20 },
  text5: { color: "white" },
  text6: { color: "black" },
  //Footer//
  text7: { color: "white" },
  text8: { color: "black" },
});
