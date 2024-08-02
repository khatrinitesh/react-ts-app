import React, { createContext, useContext, useState ,ReactNode} from 'react'
import { AuthContextType, } from '../../interface/interface'


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children:ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };