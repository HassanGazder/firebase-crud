// src/components/UserList.js
import React, { useState, useEffect } from "react";
import { addUser, getAllUsers, updateUser, deleteUser } from "./userservice";
import { Button, TextField, List, ListItem, Typography, Container } from "@mui/material";

function UserList() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({ name: "", email: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await getAllUsers();
      setUsers(userList);
    };
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    await addUser(newUser);
    setNewUser({ name: "", email: "" });
    const updatedUsers = await getAllUsers();
    setUsers(updatedUsers);
  };

  const handleUpdateUser = async (id) => {
    await updateUser(id, editUserData);
    setEditUserId(null);
    const updatedUsers = await getAllUsers();
    setUsers(updatedUsers);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    const updatedUsers = await getAllUsers();
    setUsers(updatedUsers);
  };

  return (
    <Container>
      <Typography variant="h4">User Management</Typography>
      <TextField
        label="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        fullWidth
      />
      <TextField
        label="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        fullWidth
      />
      <Button variant="contained" onClick={handleAddUser}>
        Add User
      </Button>

      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            {editUserId === user.id ? (
              <div>
                <TextField
                  label="Name"
                  value={editUserData.name}
                  onChange={(e) => setEditUserData({ ...editUserData, name: e.target.value })}
                />
                <TextField
                  label="Email"
                  value={editUserData.email}
                  onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })}
                />
                <Button onClick={() => handleUpdateUser(user.id)}>Update</Button>
              </div>
            ) : (
              <div>
                <Typography>Name: {user.name}</Typography>
                <Typography>Email: {user.email}</Typography>
                <Button onClick={() => { setEditUserId(user.id); setEditUserData(user); }}>Edit</Button>
                <Button onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </div>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UserList;
