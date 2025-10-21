import { DefaultButton } from '@/components/DefaultButton';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import validator from 'validator';

export default function CadastroPessoal() {
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: 'all',
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      senha: '',
      senhaVerificada: '',
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful]);


  const aoSubmeter = (dados) => {
    console.log(dados);
    Alert.alert('Cadastro realizado!', JSON.stringify(dados, null, 2));
  };

  const validarEmail = (valor) => {
    return validator.isEmail(valor) || 'E-mail inválido';
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Insira alguns dados básicos:</Text>

        <Text style={styles.label}>Nome</Text>
        <Controller
          control={control}
          name="nome"
          rules={{
            required: 'Campo de nome é obrigatório',
            minLength: {
              value: 2,
              message: 'O nome deve ter pelo menos cinco caracteres',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.nome && styles.inputError]}
              placeholder="Digite seu nome completo"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.nome && <Text style={styles.error}>{errors.nome.message}</Text>}

        <Text style={styles.label}>E-mail</Text>
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'O campo de email é obrigatório',
            validate: validarEmail,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="Insira seu endereço de email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

        <Text style={styles.label}>Telefone</Text>
        <Controller
          control={control}
          name="telefone"
          rules={{
            required: 'O campo telefone é obrigatório',
            pattern: {
              value: /^\(\d{2,3}\) \d{5}-\d{4}$/,
              message: 'O telefone inserido está no formato incorreto',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <MaskedTextInput
              mask="(99) 99999-9999"
              keyboardType="phone-pad"
              style={[styles.input, errors.telefone && styles.inputError]}
              placeholder="Ex: (11) 99999-9999"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.telefone && (
          <Text style={styles.error}>{errors.telefone.message}</Text>
        )}

        <Text style={styles.label}>Crie uma senha</Text>
        <Controller
          control={control}
          name="senha"
          rules={{
            required: 'O campo de senha é obrigatório',
            minLength: {
              value: 6,
              message: 'A senha deve ter pelo menos seis caracteres',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.senha && styles.inputError]}
              placeholder="Crie uma senha"
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.senha && <Text style={styles.error}>{errors.senha.message}</Text>}

        <Text style={styles.label}>Repita a senha</Text>
        <Controller
          control={control}
          name="senhaVerificada"
          rules={{
            required: 'Repita a senha',
            validate: {
              tamanhoMinimo: (val) =>
                val.length >= 6 || 'A senha deve ter pelo menos 6 caracteres',
              senhaIguais: (val) => {
                const senhaAtual = getValues('senha');
                return val === senhaAtual || 'As senhas não correspondem';
              },
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.senhaVerificada && styles.inputError]}
              placeholder="Repita a senha anterior"
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.senhaVerificada && (
          <Text style={styles.error}>{errors.senhaVerificada.message}</Text>
        )}
      </View>
      <View style = {styles.container}>
        <DefaultButton
          onPress={handleSubmit(aoSubmeter)}
          display="Avançar"
          color="#6E17EB" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  label: {
    fontSize: 20,
    marginBottom: 4
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});
