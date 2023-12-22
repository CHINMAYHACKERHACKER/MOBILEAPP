import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { TextInput } from 'react-native-paper';

const Login = () => {
    return <>
        <View>
            <TextInput
                style={UserLoginStyle.UserTextInput}
                label="Email"
                mode="outlined"
                outlineColor="white"
                activeOutlineColor="white"
                // value={text}
                // onChangeText={text => setText(text)}
                left={<TextInput.Icon icon="email" />}
            />

            <TextInput
                style={UserLoginStyle.UserTextInput}
                label="Password"
                mode="outlined"
                outlineColor="white"
                activeOutlineColor="white"
                // value={text}
                // onChangeText={text => setText(text)}
                left={<TextInput.Icon icon="eye" />}
            />
            <View>
                <TouchableOpacity
                    style={UserLoginStyle.LoginButton}
                // onPress={() => handleTabPress('Login')}
                >
                    <Text style={{ textAlign: 'center', fontWeight: "bold", color: "white" }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    </>
}

const UserLoginStyle = StyleSheet.create({
    UserTextInput: {
        width: 270,
        alignSelf: "center",
        marginTop: 30,
        overflow: "hidden",
        borderTopRightRadius: 23,
        borderTopLeftRadius: 23,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    LoginButton: {
        margin: 10,
        backgroundColor: "white",
        padding: 10,
        width: 230,
        height: 43,
        borderRadius: 20,
        alignSelf: "center",
        marginTop: 30,
        backgroundColor: "black"
    }
})
export default Login;