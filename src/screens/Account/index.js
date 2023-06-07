import React from "react";
import { Image, View } from "react-native";
import { Container } from "./styles";
import { Button, Text } from "react-native-paper";

export const Account = ({ navigation }) => {
  return (
    <Container>
      <Image source={require("../../../assets/logo.png")} />
      <Text
        variant="headlineSmall"
        style={{ fontWeight: 600, color: "#fff", marginTop: 30 }}
      >
        NonVastum
      </Text>
      <View style={{ marginTop: 170 }}>
        <Button
          mode="contained-tonal"
          buttonColor="#ee8710"
          textColor="#fff"
          onPress={() => navigation.navigate("Login")}
        >
          ENTRAR
        </Button>
        <Button
          mode="contained-tonal"
          buttonColor="#ee8710"
          textColor="#fff"
          style={{ marginTop: 30, width: 330 }}
          onPress={() => navigation.navigate("Register")}
        >
          CADASTRAR
        </Button>
      </View>
    </Container>
  );
};
