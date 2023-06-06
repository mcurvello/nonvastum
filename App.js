import { StatusBar } from "expo-status-bar";
import { AppNavigator } from "./src/navigation";

import {
  useFonts,
  SourceSansPro_400Regular,
} from "@expo-google-fonts/source-sans-pro";
export default function App() {
  const [fontLoaded] = useFonts({ SourceSansPro_400Regular });

  if (!fontLoaded) {
    return null;
  }
  return (
    <>
      <AppNavigator />
      <StatusBar />
    </>
  );
}
