import React from "react";
export const Footer = () => {
  return (
    <footer className="bg-amber-950 border-t border-amber-800 py-4 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-amber-400/80 leading-relaxed">
          Proyecto de aprendizaje | Datos obtenidos de{" "}
          <a
            href="https://escerveza.com"
            className="text-amber-300 hover:text-amber-200 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escerveza.com
          </a>
          . Este sitio no tiene afiliación oficial y es solo con fines
          educativos.
        </p>
      </div>
    </footer>
  );
};
