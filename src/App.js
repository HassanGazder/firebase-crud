import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Button, TextField, Container, Typography } from "@mui/material";
import UserList from "./userlist";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authUser, setAuthUser] = useState(null);

  const handleLogin = async () => {
    try {
      // Attempt to sign in with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setAuthUser(userCredential.user); // Store authenticated user info
    } catch (err) {
      setError(err.message); // Set error message if login fails
    }
  };
  return (
    <div className="App">
      <Container maxWidth="sm">
      {!authUser ? ( // If no authenticated user, show the login form
        <>
          <Typography variant="h4" gutterBottom>
            Superadmin Login
          </Typography>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
            Login
          </Button>
        </>
      ) : (
        <UserList />
      )}
    </Container>


    </div>

  );
}

export default App;
