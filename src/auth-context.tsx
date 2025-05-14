import {createContext, useContext, useState} from 'react';

type AuthContextType = {
  productInCart: any;
  setProductInCart: (productDetails: any) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [productInCart, setProductInCart] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        productInCart,
        setProductInCart,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
