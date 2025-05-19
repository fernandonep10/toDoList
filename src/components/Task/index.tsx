import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

type Props = {
  descricaoTarefa: string;
  onRemove: () => void;
  onCheck: () => void;
  isFinished: boolean;
};

export default function Task({
  descricaoTarefa,
  onRemove,
  onCheck,
  isFinished,
}: Props) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={[styles.container, isFinished && styles.containerDone]}>
      <Checkbox
        value={isChecked}
        onValueChange={(newValue) => {
          setIsChecked(newValue);
          onCheck();
        }}
        color={isChecked ? "#5E60CE" : "#4EA8DE"}
        style={{
          borderRadius: 13,
          marginRight: 10,
          padding: 9,
        }}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      />
      <View style={styles.descricaoTarefaContainer}>
        <Text
          style={[
            styles.descricaoTarefa,
            isFinished && styles.descricaoTarefaDone,
          ]}
        >
          {descricaoTarefa}
        </Text>
      </View>
      <TouchableOpacity onPress={onRemove} activeOpacity={0.6}>
        <Feather name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
