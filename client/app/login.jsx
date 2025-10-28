import axios from "axios";
import { router } from "expo-router";
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import validator from "validator";
import { DefaultButton } from "../components/DefaultButton";

const API_BASE_URL = process.env.EXPO_API_BASE_URL

export default function Login() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      senha: '',
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful]);

  const aoSubmeter = async (dados) => {
    try {
      const resposta = await axios.post(`${API_BASE_URL}/api/login`, dados);
      if (resposta.status === 200) {
        Alert.alert("Login bem-sucedido!");
        router.navigate("/home");
      }
    } catch (erro) {
      console.error(erro);
      Alert.alert("E-mail ou senha inválidos")
    }
  };

  const validarEmail = (valor) => {
    return validator.isEmail(valor) || "E-mail inválido"
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>E-mail</Text>
      <Controller
        control={control}
        name="email"
        rules={{
          required: "O campo de email é obrigatório",
          validate: validarEmail,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
      <Text style={styles.label}>Senha</Text>
      <Controller
        control={control}
        name="senha"
        rules={{
          required: "O campo da senha é obrigatório"
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.senha && styles.inputError]}
            placeholder="Digite sua senha"
            secureTextEntry
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.senha && <Text style={styles.error}>{errors.senha.message}</Text>}

      <DefaultButton
        onPress={handleSubmit(aoSubmeter)}
        display="Entrar"
        color="#6E17EB"
      />
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 20,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  inputError: {
    borderColor: "red",
  },
  error: {
    color: "red",
    marginBottom: 8,
  },
})