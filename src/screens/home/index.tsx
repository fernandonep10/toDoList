import { useState, useEffect } from "react";
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
import Logo from "../../../assets/logo/Logo.svg";

//import * as NavigationBar from "expo-navigation-bar";

export default function Home() {
  const [tasksCreated, setTasksCreated] = useState([
    "task 1",
    "task 2",
    "task 3",
    "task 4",
    "task 5",
    "task 6",
    "task 7",
    "task 8",
    "task 9",
    "task 10",
    "task 11",
  ]);

  const [tasksFinished, setTasksFinished] = useState<string[]>([]);

  const [newTask, setTask] = useState("");

  const handleAddTask = () => {
    if (newTask === "") {
      Alert.alert("Tarefa vazia", "Por favor, adicione uma tarefa.");
      return;
    }

    if (tasksCreated.includes(newTask)) {
      Alert.alert("Tarefa já existe", "Essa tarefa já foi criada.");
      return;
    }

    setTasksCreated((prevState) => [...prevState, newTask]);

    setTask("");
  };

  function handleRemoveTask(item: string) {
    Alert.alert("Remover tarefa", "Deseja remover essa tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          console.log("Tarefa removida");

          //Remove a tarefa da lista de tarefas criadas
          setTasksCreated((prevState) =>
            prevState.filter((task) => task !== item)
          );

          //Remove a tarefa da lista de tarefas finalizadas
          setTasksFinished((prevState) =>
            prevState.filter((task) => task !== item)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);

    return;
  }

  function handleCheckTask(item: string) {
    if (tasksFinished.includes(item)) {
      setTasksFinished((prevState) =>
        prevState.filter((task) => task !== item)
      );
    } else {
      setTasksFinished((prevState) => [...prevState, item]);
    }

    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo height={150} width={150} />
      </View>

      <View style={styles.body}>
        <View style={styles.form}>
          <TextInput
            style={[
              styles.taskInput,
              newTask !== "" && styles.taskInputFilled, // aplica estilo extra se tiver conteúdo
            ]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={setTask}
          >
            {newTask}
          </TextInput>
          <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
            <Feather name="plus-circle" size={24} color="#FFF" />
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
            flex: 1,
          }}
        >
          <FlatList
            data={tasksCreated}
            renderItem={({ item }) => (
              <Task
                key={item}
                descricaoTarefa={item}
                onRemove={() => {
                  handleRemoveTask(item);
                }}
                onCheck={() => {
                  handleCheckTask(item);
                }}
                isFinished={tasksFinished.includes(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
