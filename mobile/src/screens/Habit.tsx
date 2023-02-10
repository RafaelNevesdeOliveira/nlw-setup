import { ScrollView, View, Text } from "react-native";
import { BackButton } from "../components/BackButton";
import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { ProgressBar } from "../components/ProgressBar";
import { CheckBox } from "../components/Checkbox";

interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as Params;
  const parsedDate = dayjs(date).locale("pt-br");
  const dayOfWeek = parsedDate.format("dddd");
  const dayOfMonth = parsedDate.format("DD/MM");

  console.log(dayOfWeek);
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>
        <Text className="mt-6 text-zinc-400 font-extrabold text-3xl lowercase">
          {dayOfMonth}
        </Text>
        <ProgressBar 
          progress={20}
        />
        <View className="mt-6">
          <CheckBox title={"Beber 2L de água"} checked={false}/>
        </View>
        <View className="mt-6">
          <CheckBox title={"Caminhar"} checked={true}/>
        </View>

      </ScrollView>
    </View>
  );
}
