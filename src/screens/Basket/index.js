import { FlatList, Text, View } from "react-native";
import React from "react";
import { SafeArea } from "../../components/SafeArea";
import { Search } from "../../components/Search";
import ProductCard from "../../components/ProductCard";
import { Button } from "react-native-paper";
import { product } from "../Menu";

const productList = product.filter((product) => product.amount > 0);
export const Basket = ({ navigation }) => {
  return (
    <SafeArea>
      {productList.length > 0 ? (
        <>
          <Search />

          <FlatList
            data={productList}
            renderItem={({ item }) => <ProductCard product={item} />}
            keyExtractor={(item) => item.id}
          />
        </>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 24, fontWeight: 600 }}>
            Sua cesta está vazia!
          </Text>
          <Button
            icon="basket"
            mode="contained"
            style={{ width: "50%", backgroundColor: "#DC7700", marginTop: 20 }}
            onPress={() => navigation.goBack()}
          >
            Adicionar produtos
          </Button>
        </View>
      )}
    </SafeArea>
  );
};
