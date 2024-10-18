import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  return (
    <SafeAreaView>
      <Text>Account</Text>
      <Link href={"/accountInfo"}>Account Info</Link>
    </SafeAreaView>
  );
}
