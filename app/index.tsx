import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const router = useRouter();

  const handleAuth = async () => {
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        setIsSignup(false); // Switch back to login mode after successful signup
        Alert.alert('Success', 'Account created successfully!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        // Navigate to the tabs screen after successful login
        router.replace('/LookingFor');
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <ImageBackground source={require('@/assets/images/login.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('@/assets/images/swanlogo.png')} style={styles.logo} />
        <Text style={styles.appTitle}>Sol-Mate</Text>
        <Text style={styles.tagline}>Connecting matches, one algorithm at a time</Text>
        {error && <Text style={styles.error}>{`Firebase: ${error}`}</Text>}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAuth}>
          <Text style={styles.buttonText}>{isSignup ? 'Sign Up' : 'Login'}</Text>
        </TouchableOpacity>
        {!isSignup && (
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
          <Text style={styles.switchText}>
            {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 170,
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#C63B85',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%', // Ensures the input field takes the full width of its container
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '40%',
    backgroundColor: '#C63B85',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  switchText: {
    color: '#C63B85',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  forgotPassword: {
    color: '#C63B85',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
