//declaração de componentes a serem utilizados
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card, Text, TextInput } from "react-native-paper";
import React, { useState } from "react";
 
export default function Login({changeStatus}) {
  const [type, setType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  //tipo recebe padrão logado
  return (
<View style={styles.container}>
<Image style={styles.logo} source={require("../../assets/S4R41VA.png")} />
<Card>
<Card.Title title="" subtitle="" />
<Card.Content>
<Text variant="bodyMedium"></Text>
<TextInput
            style={styles.label}
            mode="outlined"
            label="Email"
            value={email}
            //onChangeText={(text) => setEmail(text)}
          />
<TextInput
            style={styles.label}
            mode="outlined"
            label="Senha"
            secureTextEntry
            value={password}
            //onChangeText={(text) => setPassword(text)}
          />
</Card.Content>
</Card>
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    textAlign: "center",
  },
  logo: {
    marginTop: 50,
        justifyContent: "center",
    alignSelf: "center",
    objectFit: "contain",
  },  
  label: {
    //marginBottom: 10,
    color: "red",
  },
  loginText: {
    color: "#FFF",
    fontSize: 24,
  }, 
});