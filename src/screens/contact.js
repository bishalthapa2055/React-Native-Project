import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CheckBox from "expo-checkbox";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [agree, setAgree] = useState(false);
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level Up Your Knowledge</Text>
      <Text style={styles.secHeader}>
        You can reach us anytime through any@thapa.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput
          style={styles.inputText}
          autoCapitalize="none"
          value={name}
          autoCorrect={false}
          onChangeText={(actualData) => setName(actualData)}
          placeholder="eg : John Cena"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Email</Text>
        <TextInput
          style={styles.inputText}
          autoCapitalize="none"
          value={email}
          autoCorrect={false}
          onChangeText={(actualData) => setEmail(actualData)}
          placeholder="eg : you@gmail.com"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Phone</Text>
        <TextInput
          style={styles.inputText}
          autoCapitalize="none"
          value={phone}
          autoCorrect={false}
          onChangeText={(actualData) => setPhone(actualData)}
          placeholder="eg : 9812121212"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Comment</Text>
        <TextInput
          style={[
            styles.inputText,
            {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // marginTop: "50%",
            },
          ]}
          autoCapitalize="none"
          value={comment}
          autoCorrect={false}
          onChangeText={(actualData) => setComment(actualData)}
          multiline
          numberOfLines={3}
          placeholder="Tell Me about Yourself"
        />
      </View>
      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.textWrapper}>
          I have read and agreed with T & C .
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={() => alert("clicked")}
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 30,
    height: "100%",
  },
  mainHeader: {
    fontWeight: "500",
    fontSize: 25,
    color: "#344055",
    marginBottom: 10,
  },
  secHeader: {
    fontWeight: "200",
    fontSize: 18,
    lineHeight: 25,
    color: "#7d7d7d",
    textAlign: "left",
    paddingBottom: 10,
  },
  inputContainer: {
    // backgroundColor: "lightgrey",
    marginTop: 10,
  },
  labels: {
    fontSize: 15,
    fontWeight: "200",
    lineHeight: 25,
    textAlign: "left",
    color: "#7d7d7d",
    marginTop: 5,
    marginBottom: 5,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 1,
    fontSize: 18,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  wrapper: {
    marginTop: 20,
  },
  textWrapper: {
    fontSize: 18,
    color: "#7d7d7d",
    marginLeft: 30,
    marginTop: -20,
    lineHeight: 25,
  },
  button: {
    borderWidth: 1,
    borderColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 10,
    color: "white",
  },
});

export default Contact;
