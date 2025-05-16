
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center justify-center p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-2 text-center">Sistema de Calendário Acadêmico</h1>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Gerencie eventos acadêmicos, tarefas e notícias para professores com facilidade.
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
            <div className="bg-indigo-600 text-white p-3 rounded-md text-center">
              <h2 className="font-bold text-lg">Perfil de Administrador</h2>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Criar eventos, tarefas e notícias</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Configurar notificações</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Gerenciar níveis de urgência</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                <Link to="/admin">Acesso Administrativo</Link>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
            <div className="bg-indigo-600 text-white p-3 rounded-md text-center">
              <h2 className="font-bold text-lg">Perfil de Professor</h2>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Visualizar calendário de eventos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Acompanhar prazos de tarefas</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Receber notificações importantes</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                <Link to="/teacher">Acesso Docente</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
