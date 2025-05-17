import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

type Props = {
  descricaoTarefa: string;
  onRemove: () => void;
};

export default function Task({ descricaoTarefa, onRemove }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? "#5E60CE" : "#4EA8DE"}
        style={{ borderRadius: 13, marginRight: 10, padding: 9 }}
      />
      <View style={styles.descricaoTarefaContainer}>
        <Text style={styles.descricaoTarefa}>{descricaoTarefa}</Text>
      </View>
      <TouchableOpacity onPress={onRemove} activeOpacity={0.6}>
        <Feather name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
