import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#FFF",
  },
  header: {
    backgroundColor: "#0D0D0D",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#1A1A1A",
    flex: 3,
    marginBottom: 20,
  },
  form: {
    flexDirection: "row",
    paddingHorizontal: 0,
    position: "absolute",
    top: -27,
    left: 25,
    right: 20,
    zIndex: 1,
  },
  taskInput: {
    backgroundColor: "#262626",
    width: "82%",
    borderRadius: 5,
    height: 54,
    paddingLeft: 20,
    color: "#F2F2F2",
  },
  buttonAdd: {
    backgroundColor: "#1E6F9F",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 54,
    width: 54,
    marginLeft: 4,
  },
  taskCounter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 64,
    marginHorizontal: 24,
    // borderBottomColor: "#333333",
    // borderBottomWidth: 1,
  },

  taskCounterCreatedContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  taskCounterCreatedDescription: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  taskCounterNumber: {
    backgroundColor: "#333333",
    color: "#D9D9D9",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  taskCounterFinishedContainer: {
    flexDirection: "row",
  },

  taskCounterFinishedDescription: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },
});
