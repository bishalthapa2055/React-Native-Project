import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import image from "../../assets/1.jpg";

const Home = () => {
  const description =
    "This is my first react native solo project for my profolio management system";

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
    marginTop: 30,
    color: "#7d7d7d",
    paddingBottom: 50,
    lineHeight: 26,
  },
});

export default Home;
