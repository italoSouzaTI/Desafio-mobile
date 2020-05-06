import React, { useState, useEffect } from "react";
import api from './services/api'
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [repository, setRepository] = useState([])

  useEffect(() => {
    api.get('repositories').then(repo => {
      setRepository(repo.data)
    })
  }, [])

  async function handleLikeRepository(id) {
    const reponse = await api.post(`repositories/${id}/like`)

    const repoLike = reponse.data

    const repoUpdate = repository.map(repository =>{
      if(repository.id ===id){
        return repoLike
      }else{
        return repository
      }
    })
    setRepository(repoUpdate)
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={repository}
          keyExtractor={repo => repo.id}
          renderItem={({ item: repository }) => (
            <View style={styles.repositoryContainer}>

              <Text style={styles.repository}>{repository.title}</Text>


              <View style={styles.techsContainer}>
                {repository.techs.map(tech => (
                  <Text key={tech} style={styles.tech}>
                    {tech}
                  </Text>
                ))}
              </View>

              <View style={styles.likesContainer}>
                <Text
                  style={styles.likeText}
                  // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
                  testID={`repository-likes-${repository.id}`}
                >
                  {repository.likes} curtida{repository.likes > 1? 's': ''}
            </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleLikeRepository(repository.id)}
                // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
                testID={`like-button-${repository.id}`}
              >
                <Text style={styles.buttonText}>Curtir</Text>
              </TouchableOpacity>
            </View>
          )}
            />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
    backgroundColor: "#7159c1",
  },
  repositoryContainer: {
        marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  repository: {
        fontSize: 32,
    fontWeight: "bold",
  },
  techsContainer: {
        flexDirection: "row",
    marginTop: 10,
  },
  tech: {
        fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  likesContainer: {
        marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
        fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
        marginTop: 10,
  },
  buttonText: {
        fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#7159c1",
    padding: 15,
  },
});