
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NotificationSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Configurações de E-mail</CardTitle>
          <CardDescription>
            Configure como os professores receberão notificações por e-mail
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-events">Notificar eventos</Label>
              <Switch id="email-events" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-tasks">Notificar tarefas</Label>
              <Switch id="email-tasks" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-news">Notificar notícias</Label>
              <Switch id="email-news" defaultChecked />
            </div>
            <div>
              <Label htmlFor="email-template">Template de e-mail</Label>
              <Textarea 
                id="email-template" 
                className="mt-1"
                defaultValue="Olá {nome_professor},

Você tem {tipo_item} programado(a) para {data_item}.

{titulo_item}
{descricao_item}

Acesse o sistema acadêmico para mais detalhes.
                "
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configurações de WhatsApp</CardTitle>
          <CardDescription>
            Configure como os professores receberão notificações via WhatsApp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="whatsapp-integration">Integração ativa</Label>
              <Switch id="whatsapp-integration" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="whatsapp-events">Notificar eventos</Label>
              <Switch id="whatsapp-events" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="whatsapp-tasks">Notificar tarefas</Label>
              <Switch id="whatsapp-tasks" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="whatsapp-news">Notificar notícias</Label>
              <Switch id="whatsapp-news" />
            </div>
            <div>
              <Label htmlFor="whatsapp-template">Template de mensagem</Label>
              <Input 
                id="whatsapp-template" 
                className="mt-1"
                defaultValue="📅 *{tipo_item}*: {titulo_item} - {data_item}" 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notificações no Aplicativo</CardTitle>
          <CardDescription>
            Configure as notificações no sistema acadêmico
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="app-events">Notificar eventos</Label>
              <Switch id="app-events" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="app-tasks">Notificar tarefas</Label>
              <Switch id="app-tasks" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="app-news">Notificar notícias</Label>
              <Switch id="app-news" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="app-reminder">Lembretes antes do prazo (dias)</Label>
              <Input 
                id="app-reminder" 
                className="w-20"
                type="number" 
                min="0" 
                defaultValue="3" 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Salvar Alterações</Button>
      </div>
    </div>
  );
};

// Add missing Textarea component
const Textarea = ({ id, className, defaultValue }: any) => {
  return (
    <textarea
      id={id}
      className={`min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      defaultValue={defaultValue}
    />
  );
};

export default NotificationSettings;
