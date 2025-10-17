import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { PurpleButton } from "../components/PurpleButton.jsx";
import { router } from "expo-router";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    // Aqui você pode adicionar validações e lógica de cadastro
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Telefone:", telefone);
    console.log("Senha:", senha);

    
    router.navigate("/");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <PurpleButton onPress={handleCadastro} display="Cadastrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
  },
});
