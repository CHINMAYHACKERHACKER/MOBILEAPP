import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Card, Button } from 'react-native-paper';
import { useState } from "react";
import Login from "../UserLogin/Login";
import Sign from "../UserSign/Sign";

const UserLoginSignUpNavigation = (props) => {
    const [activeTab, setActiveTab] = useState('Login'); // State to track active tab

    const handleTabPress = (tabName) => {
        setActiveTab(tabName);
    };
    return <>
        <ImageBackground source={require('../../Image/Insta.jpg')} style={LoginStyle.backgroundImage}>
            <Card style={LoginStyle.userLoginCard}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={[
                            LoginStyle.loginNavigationTab,
                            { flex: 1, backgroundColor: activeTab === 'Login' ? '#CB4BAB' : 'white' }, // Conditional color change
                        ]}
                        onPress={() => handleTabPress('Login')}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: "bold", color: activeTab === 'Login' ? 'white' : 'black' }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            LoginStyle.loginNavigationTab,
                            { flex: 1, backgroundColor: activeTab === 'SignUp' ? '#CB4BAB' : 'white' }, // Conditional color change
                        ]}
                        onPress={() => handleTabPress('SignUp')}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: "bold", color: activeTab === 'SignUp' ? 'white' : 'black' }}>
                            SignUp
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        activeTab === 'Login' ? <Login /> : (activeTab === 'SignUp' ? <Sign /> : null)
                    }
                </View>
            </Card>
        </ImageBackground>
    </>
}

const LoginStyle = StyleSheet.create({
    userLoginCard: {
        marginTop: 200,
        height: 370,
        borderRadius: 30,
        width: 320,
        marginLeft: 18
    },
    loginNavigationTab: {
        margin: 10,
        backgroundColor: "white",
        padding: 10,
        width: 150,
        height: 39,
        borderRadius: 20
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' or 'contain' as per your preference
        // You can add more styles as needed
    }
})

export default UserLoginSignUpNavigation;