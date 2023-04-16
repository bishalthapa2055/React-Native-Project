import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import CoursesApi from "../api/courses";

const Courses = ({ navigation }) => {
  // console.log(CoursesApi);
  const coursesCard = ({ item }) => {
    return (
      <>
        <View style={styles.mainContainer}>
          <View style={styles.courseContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.cardImage}
                source={item.image}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.mainHeader}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("CourseDetails")}
              >
                <Text style={styles.buttontext}>Courses Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <FlatList
        data={CoursesApi}
        renderItem={coursesCard}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "grey",
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  courseContainer: {
    // backgroundColor: "red",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  imageContainer: {
    // backgroundColor: "green",
    paddingHorizontal: 10,
  },
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainHeader: {
    fontSize: 22,
    color: "#244055",
    textTransform: "uppercase",
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    textAlign: "left",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  buttontext: {
    fontSize: 20,
    color: "#eee",
    textTransform: "capitalize",
  },
});

export default Courses;
