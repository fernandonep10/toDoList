import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#262626",
    borderRadius: 5,
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    alignContent: "center",
    borderColor: "#333333",
    borderWidth: 1,
  },
  containerDone: {
    borderColor: "#262626",
  },
  descricaoTarefa: {
    color: "#F2F2F2",
    fontSize: 14,
    marginLeft: 8,
    marginTop: 2,
    lineHeight: 25,
  },
  descricaoTarefaDone: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  descricaoTarefaContainer: {
    width: "85%",
  },
});
