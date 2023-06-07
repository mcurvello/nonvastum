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
    amount: 2,
  },
  {
    key: 2,
    image:
      "https://s2.glbimg.com/j_K14X1fZDOMQmTdQXN4vJ9vzQU=/620x413/smart/e.glbimg.com/og/ed/f/original/2022/06/14/como-preparar-a-farinha-de-trigo-para-receitas4.jpg",
    title: "Farinha de trigo",
    market: "Mercado Extra",
    expirationDate: "30/05",
    value: 10,
    amount: 1,
  },
  {
    key: 3,
    image:
      "https://images.fazendinha.me/production/produtor/462/produtos/3825/ceccon-organicos-feijao-preto-organico-ceccon-1kg-1646429551.jpg",
    title: "Feijão preto",
    market: "Mercado Extra",
    expirationDate: "30/05",
    value: 6.4,
    amount: 0,
  },
  {
    key: 4,
    image:
      "https://opresenterural.com.br/wp-content/uploads/2022/06/óleo-de-soja-1.jpg",
    title: "Óleo de soja",
    market: "Mercado Extra",
    expirationDate: "30/05",
    value: 17,
    amount: 4,
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
