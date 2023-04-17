import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import image from "../../assets/111.jpg";
const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Er.Bishal Thapa</Text>
      <Text style={styles.title}>I am Full Stack Developer</Text>
      <View>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubheader}>About Me</Text>
        <Text style={styles.paraStyle}>
          I Am a MERN Stack Developer who have completed Computer Engineering
          from National College of Engineering and currently working as a MERN
          Stack Developer in various companies.
        </Text>
      </View>
      <Text style={styles.followHeader}>Follow Me on Social Media</Text>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => Linking.openURL("www.youtube.com")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Youtube")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Discord")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    // backgroundColor: "lightgrey",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
    aspectRatio: 1,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "capitalize",
    fontWeight: "500",
    lineHeight: 30,
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: "#7d7d7d",
    fontWeight: "300",
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    marginVertical: 30,
    paddingHorizontal: 30,
  },
  aboutSubheader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    lineHeight: 30,
    alignItems: "center",
    textAlign: "center",
    marginVertical: 15,
  },
  paraStyle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "left",
    lineHeight: 25,
    paddingVertical: 10,
  },
  followHeader: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingVertical: 10,
    fontWeight: "300",
  },
  menu: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 10,
    paddingVertical: 20,
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});
export default About;
