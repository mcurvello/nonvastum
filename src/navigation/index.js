import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./Main";
import { AccountNavigator } from "./AccountNavigator";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
