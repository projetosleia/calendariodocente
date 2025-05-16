
import React, { useState } from 'react';
import Header from '@/components/Header';
import EventForm from '@/components/admin/EventForm';
import NotificationSettings from '@/components/admin/NotificationSettings';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header userType="admin" userName="Admin" />
      
      <div className="container mx-auto px-4 py-6 flex-1">
        <h1 className="text-2xl font-bold mb-6">Painel de Configuração</h1>
        
        <Tabs defaultValue="eventos" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="eventos">Gerenciar Eventos</TabsTrigger>
            <TabsTrigger value="notificacoes">Configurar Notificações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="eventos" className="space-y-6">
            <EventForm />
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Itens Criados</h3>
              <div className="border rounded-md">
                <div className="grid grid-cols-5 p-3 bg-gray-50 font-medium border-b">
                  <div>Título</div>
                  <div>Tipo</div>
                  <div>Data Inicial</div>
                  <div>Data Final</div>
                  <div>Ações</div>
                </div>
                <div className="p-4 text-center text-gray-500">
                  Nenhum item criado ainda.
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notificacoes">
            <NotificationSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
