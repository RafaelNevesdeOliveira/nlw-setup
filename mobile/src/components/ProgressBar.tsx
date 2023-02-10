import { View } from "react-native";

interface Props {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: Props) {
  return (
    <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <View 
        className="h-3 rounded-xl bg-violet-600 transition-timing-function: linear; duration-500"
        style={{ width: `${progress}%` }}
      />
    </View>
  )
}