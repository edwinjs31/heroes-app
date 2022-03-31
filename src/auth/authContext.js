import { createContext } from "react";


//contexto para proveer informacion a los componentes hijos, retorna un Componente
//éste componente debe ser implementado en el componente mas alto
export const AuthContext = createContext();