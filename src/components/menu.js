import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Courses")}
      >
        <Text style={styles.text}>Courses</Text>
        {/* <Image style={styles.iconStyle} source={} /> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text style={styles.text}>Student</Text>
        {/* <Image style={styles.iconStyle} source={} /> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.text}>About</Text>
        {/* <Image style={styles.iconStyle} source={} /> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text style={styles.text}>Contact</Text>
        {/* <Image style={styles.iconStyle} source={} /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonStyle: {},
  text: {},
  iconStyle: {},
});

export default Menu;
