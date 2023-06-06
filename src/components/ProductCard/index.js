import { Text } from "react-native";
import React from "react";
import {
  CardContainer,
  CardContent,
  CardImage,
  CardQuantity,
  CardValue,
} from "./styles";
import { IconButton } from "react-native-paper";

const ProductCard = ({ product }) => {
  return (
    <CardContainer>
      <CardImage
        source={{ uri: `${product.image}` }}
        style={{ width: 64, height: 64, borderRadius: 12 }}
        resizeMode="contain"
      />
      <CardContent>
        <Text style={{ fontSize: 18, fontWeight: 600, color: "#09101D" }}>
          {product.title}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 400, color: "#858C94" }}>
          {product.market}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 600, color: "#FF1843" }}>
          Validade: {product.expirationDate}
        </Text>
      </CardContent>
      <CardValue>
        <Text
          style={{
            fontSize: product.amount > 0 ? 20 : 24,
            fontWeight: 600,
            color: "#DC7700",
          }}
        >
          {product.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
        {product.amount > 0 && (
          <CardQuantity>
            <IconButton
              mode="contained"
              icon="minus"
              iconColor="#DC7700"
              size={12}
              containerColor="#DC77001A"
              style={{ marginVertical: -1 }}
              onPress={() => null}
            />
            <Text style={{ fontSize: 16, fontWeight: 600 }}>
              {product.amount}
            </Text>
            <IconButton
              mode="contained"
              icon="plus"
              iconColor="white"
              size={12}
              containerColor="#DC7700"
              style={{ marginVertical: -1 }}
              onPress={() => null}
            />
          </CardQuantity>
        )}
      </CardValue>
    </CardContainer>
  );
};

export default ProductCard;
