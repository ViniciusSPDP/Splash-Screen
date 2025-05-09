import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
}

function ListScreen() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
}

function PostScreen() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
}

function PostScreen2() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
}

function APIScreen() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Menu() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Home':
                                iconName = 'home';
                                break;
                            case 'Listar':
                                iconName = 'list';
                                break;
                            case 'Profissional':
                                iconName = 'user-md';
                                break;
                            case 'Tarefa':
                                iconName = 'list-alt';
                                break;
                            case 'Ler API':
                                iconName = 'android';
                                break;
                            default:
                                iconName = 'bomb';
                                break;
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#fa65b1', // Cor principal
                    tabBarInactiveTintColor: '#d3d3d3', // Cinza claro para ícones inativos
                    tabBarActiveBackgroundColor: '#ffffff', // Fundo branco para aba ativa
                    tabBarInactiveBackgroundColor: '#ffffff', // Fundo branco para abas inativas
                    tabBarStyle: {
                        backgroundColor: '#ffffff', // Fundo branco para a barra
                        borderTopColor: '#fa65b1', // Borda superior na cor principal
                        borderTopWidth: 1,
                    },
                    showLabel: true,
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Listar" component={ListScreen} />
                <Tab.Screen name="Profissional" component={PostScreen2} />
                <Tab.Screen name="Tarefa" component={PostScreen} />
                <Tab.Screen name="Ler API" component={APIScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Fundo branco para as telas
    },
    iconTabRound: {
        color: '#fa65b1', // Usando a cor principal
        width: 60,
        height: 90,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#fa65b1', // Sombra na cor principal
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        backgroundColor: '#fff', // Fundo branco para contraste
    }
});