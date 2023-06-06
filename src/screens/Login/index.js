import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Container } from "./styles";
import { Button, Text, TextInput } from "react-native-paper";

export const Login = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <Image source={require("../../../assets/logo.png")} />
      <Text
        variant="headlineSmall"
        style={{ fontWeight: 600, color: "#fff", marginTop: 30 }}
      >
        NonVastum
      </Text>
      <View
        style={{ marginTop: 30, height: 220, justifyContent: "space-between" }}
      >
        <TextInput
          mode="outlined"
          placeholder="Nome"
          value={name}
          placeholderTextColor="#fff"
          textColor="#fff"
          left={<TextInput.Icon iconColor="#fff" icon="account" />}
          style={{ backgroundColor: "transparent" }}
          outlineStyle={{
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 2,
          }}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          mode="outlined"
          placeholder="Senha"
          value={password}
          placeholderTextColor="#fff"
          textColor="#fff"
          left={<TextInput.Icon iconColor="#fff" icon="account" />}
          style={{ backgroundColor: "transparent" }}
          outlineStyle={{
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 2,
          }}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          mode="contained-tonal"
          buttonColor="#ee8710"
          textColor="#fff"
          style={{ marginTop: 8, width: 330 }}
        >
          ENTRAR
        </Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          bottom: 40,
        }}
      >
        <Text variant="labelLarge" style={{ color: "#fff" }}>
          Não tem conta?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            variant="labelLarge"
            style={{ color: "#fff", textDecorationLine: "underline" }}
          >
            Crie uma conta.
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
