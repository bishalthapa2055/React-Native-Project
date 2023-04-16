import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import image from "../../assets/1.jpg";
import Menu from "../components/menu";

const Home = () => {
  const description =
    "Hello Everybody My Name is Er.Bishal Thapa and I am Building this project to gain detailed knowledge of React Native as well as to implement it on various projects.";
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={image}
          />
          <Text style={styles.mainHeader}>Welcome to </Text>
          <Text
            style={[
              styles.mainHeader,
              {
                fontSize: 33,
                color: "#4c5dab",
                marginTop: 0,
              },
            ]}
          >
            Bishal Portfolio
          </Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.menuStyle}>
          <View style={[styles.linestyle, { marginVertical: 20 }]}>
            <Menu />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "lightgrey",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 20,
    marginTop: 50,
    display: "flex",
    alignItems: "stretch",
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
  },
  description: {
    textAlign: "left",
    fontSize: 20,
    marginTop: 20,
    color: "#7d7d7d",
    paddingBottom: 50,
    lineHeight: 26,
  },
  menuStyle: {
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 50,
  },
  linestyle: {
    // borderWidth: 1,
    // borderColor: "grey",
    // marginBottom: 20,
  },
});

export default Home;
