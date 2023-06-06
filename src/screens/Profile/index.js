import { View } from "react-native";
import React from "react";
import { SafeArea } from "../../components/SafeArea";
import { Avatar, Button, Text } from "react-native-paper";

const Profile = () => {
  return (
    <SafeArea style={{ alignItems: "center" }}>
      <Avatar.Icon
        size={150}
        icon="human"
        color="#FFF"
        style={{ backgroundColor: "#DC7700" }}
      />
      <View
        style={{
          marginTop: 20,
          marginBottom: 200,
          height: 200,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
          Marcio Curvello
        </Text>
        <Text variant="titleMedium">marciocurvello@gmail.com</Text>
        <Text variant="titleMedium">ACESSO: Consumidor</Text>
      </View>

      <Button
        icon="logout"
        mode="contained"
        style={{ width: "50%", backgroundColor: "#DC7700", marginTop: 20 }}
        onPress={() => null}
      >
        SAIR
      </Button>
    </SafeArea>
  );
};

export default Profile;
