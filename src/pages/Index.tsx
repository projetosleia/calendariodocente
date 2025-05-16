
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, FileText, Bell } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center p-4">
      <div className="mb-8 max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Calendar className="h-8 w-8 text-purple-600" />
          <h1 className="text-4xl font-bold text-purple-700">ULife</h1>
        </div>
        <h2 className="text-2xl font-semibold text-purple-600 mb-2 text-center">Sistema de Calendário Acadêmico</h2>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Gerencie eventos acadêmicos, tarefas e notícias para professores com facilidade.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Card className="overflow-hidden border-purple-100 shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-purple-700 p-4 text-white">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Calendar className="h-5 w-5" /> 
              Perfil de Administrador
            </h2>
          </div>
          <CardContent className="p-6">
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-purple-100 p-1 rounded-full">
                  <Calendar className="h-4 w-4 text-purple-700" />
                </div>
                <div>
                  <p className="font-medium text-purple-800">Eventos</p>
                  <p className="text-sm text-gray-600">Crie e gerencie eventos acadêmicos</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-pink-100 p-1 rounded-full">
                  <FileText className="h-4 w-4 text-pink-700" />
                </div>
                <div>
                  <p className="font-medium text-purple-800">Tarefas</p>
                  <p className="text-sm text-gray-600">Configure prazos e tarefas para docentes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-fuchsia-100 p-1 rounded-full">
                  <Bell className="h-4 w-4 text-fuchsia-700" />
                </div>
                <div>
                  <p className="font-medium text-purple-800">Notificações</p>
                  <p className="text-sm text-gray-600">Configure alertas por email, app e WhatsApp</p>
                </div>
              </li>
            </ul>
            <Button asChild className="w-full bg-purple-700 hover:bg-purple-800">
              <Link to="/admin">Acessar Painel de Configuração</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-purple-100 shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-purple-700 p-4 text-white">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Calendar className="h-5 w-5" /> 
              Perfil de Professor
            </h2>
          </div>
          <CardContent className="p-6">
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-purple-100 p-1 rounded-full">
                  <Calendar className="h-4 w-4 text-purple-700" />
                </div>
                <div>
                  <p className="font-medium text-purple-800">Calendário</p>
                  <p className="text-sm text-gray-600">Visualize eventos em visão diária, semanal ou mensal</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-pink-100 p-1 rounded-full">
                  <FileText className="h-4 w-4 text-pink-700" />
                </div>
                <div>
                  <p className="font-medium text-purple-800">Tarefas</p>
                  <p className="text-sm text-gray-600">Acompanhe tarefas pendentes e marque como concluídas</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-fuchsia-100 p-1 rounded-full">
                  <Bell className="h-4 w-4 text-fuchsia-700" />
                </div>
                <div>
                  <p className="font-medium text-purple-800">Notícias</p>
                  <p className="text-sm text-gray-600">Receba notificações importantes da instituição</p>
                </div>
              </li>
            </ul>
            <Button asChild className="w-full bg-purple-700 hover:bg-purple-800">
              <Link to="/teacher">Acessar Calendário</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>© 2025 ULife - Sistema de Calendário Acadêmico</p>
      </footer>
    </div>
  );
};

export default Index;
