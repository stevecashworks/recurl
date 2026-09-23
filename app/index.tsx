import { Link } from "expo-router";
import "../global.css";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-xl text-success ">Edit app/index.tsx to edit this screen.</Text>
      <Link href="/onboarding" className="text-background bg-primary p-4 mt-4 rounded">
        Go to Onboarding
      </Link>

       <Link href="/SignIn" className="text-background min-w-40 text-center bg-primary p-4 mt-4 rounded">
        Sign In
      </Link>
      <Link href="/SignUp" className="text-background min-w-40 text-center bg-primary p-4 mt-4 rounded">
        Sign Up
      </Link>
      <Link href="/subscriptions/spotify">View Spotify Subscription</Link>
      <Link href={{pathname:"/subscriptions/[id]", params:{id:"youtube"}}}>View Youtube Subscription</Link>
      <Link href="/subscriptions">View all subscriptions</Link>
    </View>
  );
}
