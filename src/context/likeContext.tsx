import  { createContext, useContext, useState, ReactNode } from 'react';

// Definimos la interfaz para el valor del contexto
interface LikesContextType {
  likedItems: Set<string>; // IDs de las tarjetas marcadas como "Me gusta"
  toggleLike: (id: string) => void; // Función para marcar/desmarcar "Me gusta"
  totalLikes: number;
}

// Creamos el contexto con un valor inicial vacío
const LikesContext = createContext<LikesContextType | undefined>(undefined);

// Proveedor del contexto
export const LikesProvider = ({ children }: { children: ReactNode }) => {
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());

  // Función para actualizar el estado de "Me gusta" de una tarjeta específica
  const toggleLike = (id: string) => {
    setLikedItems(prevLikedItems => {
      const newLikedItems = new Set(prevLikedItems);
      if (newLikedItems.has(id)) {
        newLikedItems.delete(id); // Si ya estaba marcado, lo desmarcamos
      } else {
        newLikedItems.add(id); // Si no estaba marcado, lo añadimos
      }
      return newLikedItems;
    });
  };

  // Total de "Me gusta"
  const totalLikes = likedItems.size;

  return (
    <LikesContext.Provider value={{ likedItems, toggleLike, totalLikes }}>
      {children}
    </LikesContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLikes = () => {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes debe usarse dentro de un LikesProvider");
  }
  return context;
};
