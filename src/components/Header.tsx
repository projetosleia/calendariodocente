
import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  userType: 'admin' | 'teacher';
  userName: string;
}

const Header = ({ userType, userName }: HeaderProps) => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-indigo-600 mr-2">Academia</h1>
          <span className="text-sm text-gray-500 hidden sm:inline">
            {userType === 'admin' ? 'Painel de Configuração' : 'Calendário Acadêmico'}
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-gray-500" />
          </Button>
          {userType === 'admin' && (
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 text-gray-500" />
            </Button>
          )}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700 hidden md:inline">{userName}</span>
            <Avatar className="h-8 w-8">
              <AvatarImage src="" alt={userName} />
              <AvatarFallback className="bg-indigo-100 text-indigo-600">
                {userName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
