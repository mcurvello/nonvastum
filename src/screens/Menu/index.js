import React from "react";
import { FlatList } from "react-native";
import { SafeArea } from "../../components/SafeArea";
import { Search } from "../../components/Search";
import ProductCard from "../../components/ProductCard";
import { Badge, BadgeText } from "./styles";

export const product = [
  {
    key: 1,
    image:
      "https://octoshop.sfo2.digitaloceanspaces.com/lojas/gergastronomia/uploads_produto/arroz-branco-1-5f3ab18673542.jpg",
    title: "Arroz branco",
    market: "Mercado Extra",
    expirationDate: "30/05",
    value: 8,
    amount: 0,
  },
  {
    key: 2,
    image:
      "https://octoshop.sfo2.digitaloceanspaces.com/lojas/gergastronomia/uploads_produto/arroz-branco-1-5f3ab18673542.jpg",
    title: "Arroz branco",
    market: "Mercado Extra",
    expirationDate: "30/05",
    value: 10,
    amount: 0,
  },
  {
    key: 3,
    image:
      "https://octoshop.sfo2.digitaloceanspaces.com/lojas/gergastronomia/uploads_produto/arroz-branco-1-5f3ab18673542.jpg",
    title: "Arroz branco",
    market: "Mercado Extra",
    expirationDate: "30/05",
    value: 6.4,
    amount: 0,
  },
  {
    key: 4,
    image:
      "https://octoshop.sfo2.digitaloceanspaces.com/lojas/gergastronomia/uploads_produto/arroz-branco-1-5f3ab18673542.jpg",
    title: "Arroz branco",
    market: "Mercado Extra",
    expirationDate: "30/05",
    value: 17,
    amount: 0,
  },
];

export const Menu = () => {
  return (
    <SafeArea>
      <Badge>
        <BadgeText>Mercado</BadgeText>
      </Badge>
      <Search />
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};
