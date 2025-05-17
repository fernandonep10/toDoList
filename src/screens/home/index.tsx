import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import Task from "../../components/Task";

export default function Home() {
  const [tasksCreated, setTasksCreated] = useState([
    "task 1",
    "task 2",
    "task 3",
  ]);

  const [tasksFinished, settasksFinished] = useState([]);

  const [task, setTask] = useState("");

  const handleAddTask = () => {
    setTasksCreated((prevState) => [...prevState, task]);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/logo/Logo.png")} />
      </View>

      <View style={styles.body}>
        <View style={styles.form}>
          <TextInput
            style={styles.taskInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={setTask}
          ></TextInput>
          <TouchableOpacity style={styles.buttonAdd}>
            <Feather
              name="plus-circle"
              size={24}
              color="#FFF"
              onPress={handleAddTask}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.taskCounter}>
          <View style={styles.taskCounterCreatedContainer}>
            <Text style={styles.taskCounterCreatedDescription}>Criadas</Text>
            <Text style={styles.taskCounterNumber}>{tasksCreated.length}</Text>
          </View>
          <View style={styles.taskCounterFinishedContainer}>
            <Text style={styles.taskCounterFinishedDescription}>
              Concluídas
            </Text>
            <Text style={styles.taskCounterNumber}>{tasksFinished.length}</Text>
          </View>
        </View>

        <View
          style={{
            paddingTop: 20,
            paddingHorizontal: 24,
          }}
        >
          <FlatList
            data={tasksCreated}
            renderItem={({ item }) => (
              <Task descricaoTarefa={item} onRemove={() => {}} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
