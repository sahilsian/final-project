import React from 'react';
import { useState } from 'react';
import { AsyncStorage } from 'react-native';

export const AuthContext = React.createContext({
    user: null,
    login: () => {},
    logout: () => {}
});

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{
            user,
            login: () => {
                //Context confguration for logging in
                const AppUser = {username: "api"}
                setUser(AppUser)
                AsyncStorage.setItem("user", JSON.stringify(AppUser))
            },
            logout: () => {
                //Removing user from storage
                AsyncStorage.removeItem("user");
            },
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;