import { ReactNode, createContext, useState } from "react";

type contextType = {
  name: string;
  idUsuario: string;
  setName: (n: string) => void;
  setIdUsuario: (m: string) => void;
};

export const UsuarioLogadoContext = createContext<contextType | null>(null);

export const UsuarioLogadoProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [name, setName] = useState("");
  const [idUsuario, setIdUsuario] = useState("");

  return (
    <UsuarioLogadoContext.Provider
      value={{ name, idUsuario, setName, setIdUsuario }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
