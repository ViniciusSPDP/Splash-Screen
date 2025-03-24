import { View, StyleSheet, Image, TouchableOpacity, Alert, StatusBar } from "react-native";
import { Card, Text, TextInput, HelperText } from "react-native-paper";
import React, { useState } from "react";
import firebase from '../services/connectionFirebase';

export default function Login({changeStatus}) {
    const [type, setType] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState("");

    // Validação do formato do email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || email.trim() === '') {
            setEmailError("O email não pode ser vazio");
            return false;
        } else if (!emailRegex.test(email)) {
            setEmailError("Formato de email inválido");
            return false;
        }
        setEmailError("");
        return true;
    };

    // Validação da senha
    const validatePassword = (password) => {
        if (!password || password.trim() === '') {
            setPasswordError("A senha não pode ser vazia");
            return false;
        } else if (password.length < 8) {
            setPasswordError("A senha deve ter pelo menos 8 caracteres");
            return false;
        } else if (!/[A-Z]/.test(password)) {
            setPasswordError("A senha deve conter pelo menos uma letra maiúscula");
            return false;
        } else if (!/[a-z]/.test(password)) {
            setPasswordError("A senha deve conter pelo menos uma letra minúscula");
            return false;
        } else if (!/[0-9]/.test(password)) {
            setPasswordError("A senha deve conter pelo menos um número");
            return false;
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setPasswordError("A senha deve conter pelo menos um caractere especial");
            return false;
        }
        setPasswordError("");
        return true;
    };

    function handleLogin() {
        setLoginError("");
        
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (!isEmailValid || !isPasswordValid) {
            return;
        }

        setLoading(true);

        if (type === 'login') {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.uid);
                })
                .catch((err) => {
                    console.log(err);
                    setLoginError("E-mail ou senha não cadastrados!");
                })
                .finally(() => setLoading(false));
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.uid);
                })
                .catch((err) => {
                    console.log(err);
                    setLoginError("Erro ao cadastrar! Tente novamente.");
                })
                .finally(() => setLoading(false));
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fa65b1" barStyle="light-content" />
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/S4R41VA.png')} />
            </View>
            
            <Card style={styles.card}>
                <Card.Title 
                    title={type === 'login' ? "Entrar" : "Criar Conta"} 
                    titleStyle={styles.cardTitle} 
                />
                <Card.Content>
                    <TextInput
                        style={styles.input}
                        mode="outlined"
                        label="E-mail"
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            if (emailError) validateEmail(text);
                            if (loginError) setLoginError("");
                        }}
                        error={!!emailError}
                        left={<TextInput.Icon icon="email" color="#fa65b1" />}
                        outlineColor="#fa65b1"
                        activeOutlineColor="#fa65b1"
                    />
                    {!!emailError && <HelperText type="error">{emailError}</HelperText>}

                    <TextInput
                        style={styles.input}
                        mode="outlined"
                        label="Senha"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text);
                            if (passwordError) validatePassword(text);
                            if (loginError) setLoginError("");
                        }}
                        error={!!passwordError}
                        left={<TextInput.Icon icon="lock" color="#fa65b1" />}
                        outlineColor="#fa65b1"
                        activeOutlineColor="#fa65b1"
                    />
                    {!!passwordError && <HelperText type="error">{passwordError}</HelperText>}
                    
                    {type !== 'login' && (
                        <Text style={styles.passwordRequirements}>
                            A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, 
                            uma minúscula, um número e um caractere especial
                        </Text>
                    )}
                    
                    {!!loginError && (
                        <HelperText type="error" style={styles.loginError}>
                            {loginError}
                        </HelperText>
                    )}
                </Card.Content>
            </Card>

            <TouchableOpacity
                style={[
                    styles.button,
                    { backgroundColor: type === 'login' ? '#fa65b1' : '#e84393' }, // Rosa principal e variante mais escura
                ]}
                onPress={handleLogin}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? 'Carregando...' : (type === 'login' ? 'Entrar' : 'Cadastrar')}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => {
                    setType((type) => (type === 'login' ? 'cadastrar' : 'login'));
                    setLoginError("");
                }}
            >
                <Text style={styles.toggleText}>
                    {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        width: 200,
        height: 280,
        resizeMode: "contain",
    },
    card: {
        borderRadius: 10,
        elevation: 4,
        marginBottom: 20,
        backgroundColor: "#fff",
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fa65b1", // Cor principal
        textAlign: "center",
    },
    input: {
        marginBottom: 5,
        backgroundColor: "#FFF",
    },
    button: {
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 15,
        elevation: 3,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    toggleButton: {
        alignItems: "center",
        padding: 10,
    },
    toggleText: {
        color: "#fa65b1", // Cor principal
        fontSize: 16,
        fontWeight: "500",
    },
    passwordRequirements: {
        fontSize: 12,
        color: "#666",
        marginTop: 5,
        marginBottom: 10,
        textAlign: "center",
    },
    loginError: {
        fontSize: 14,
        textAlign: "center",
        marginTop: 10,
        fontWeight: "bold",
        color: "#d63031" // Vermelho para erros (contraste com o fundo branco)
    }
});