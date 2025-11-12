import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="text-9xl mb-4">⚠️</div>
        <h1 className="text-5xl font-bold text-amber-800 mb-4">Error</h1>
        <h2 className="text-xl font-semibold text-amber-700 mb-4">
          Ha ocurrido un problema
        </h2>
        <p className="text-amber-600 mb-8 max-w-md">
          Lo sentimos, algo no funcionó correctamente. Puedes intentar volver al
          inicio o recargar la página.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
          >
            Inicio
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="border border-amber-600 text-amber-700 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors font-medium"
          >
            Recargar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
