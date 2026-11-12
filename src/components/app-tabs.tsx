import { Tabs } from "expo-router";

export default function AppTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#167D75",
        tabBarInactiveTintColor: "#94A3B8",

        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#DCECE9",
          height: 110,
          paddingBottom: 25,
          paddingTop: 10,
        },

        tabBarLabelStyle: {
          fontSize: 17,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "🏠 HOME",
          tabBarIcon: () => null,
        }}
      />

      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          tabBarLabel: "💼 PORTFOLIO",
          tabBarIcon: () => null,
        }}
      />

      <Tabs.Screen
        name="score"
        options={{
          title: "My Score",
          tabBarLabel: "🎓 MY SCORE",
          tabBarIcon: () => null,
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarLabel: "💬 CONTACT",
          tabBarIcon: () => null,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
