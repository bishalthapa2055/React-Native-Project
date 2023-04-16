import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import axios from "axios";
const UserData = () => {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      console.log(data);

      setApi(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleApi = ({ item }) => {
    return (
      <>
        <View style={styles.card}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.imgStyle}
              source={{ uri: item.image }}
              resizeMode="stretch"
            />
          </View>

          <View style={styles.biodata}>
            <Text style={styles.bio}>Bio-Data</Text>
            <Text style={styles.number}>
              {item.userId < 10 ? `#0${item.userId}` : `${item.userId}`}
            </Text>
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.below}>{item.name}</Text>
            <Text style={styles.below}>{item.email}</Text>
            <Text style={styles.below}>{item.mobile}</Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <View style={styles.mainBody}>
        <Text style={styles.mainHeader}>Lists Of Students</Text>
        <FlatList
          data={api}
          renderItem={handleApi}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    // margin: 20,
  },
  mainHeader: {
    textAlign: "center",
    color: "#7d7d7d",
    fontSize: 30,
    textTransform: "capitalize",
    marginVertical: 10,
  },
  card: {
    // backgroundColor: "red",
    height: "100%",
    // paddingHorizontal: 20,
    width: 300,
    marginLeft: 20,
    borderRadius: 5,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    // marginRight: 10,
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  imgContainer: {
    // backgroundColor: "green",
    width: "100%",
    // height: undefined,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imgStyle: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
  },
  biodata: {
    backgroundColor: "#353935",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingLeft: 10,
  },
  bio: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  number: {
    fontSize: 20,
    fontWeight: "300",
    color: "white",
    paddingRight: 5,
    alignItems: "center",
    paddingTop: 5,
  },
  mainContainer: {
    backgroundColor: "#353935",
    // height: "100%",
  },
  below: {
    color: "white",
    fontSize: 18,
    lineHeight: 25,
    paddingBottom: 5,
    paddingLeft: 10,
  },
});

export default UserData;
