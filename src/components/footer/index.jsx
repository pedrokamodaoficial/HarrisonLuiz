import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Pedro Kamoda. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
