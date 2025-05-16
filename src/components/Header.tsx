
import React from 'react';
import { Bell, Settings, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  userType: 'admin' | 'teacher';
  userName: string;
}

const Header = ({ userType, userName }: HeaderProps) => {
  return (
    <header className="w-full border-b border-purple-100 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-bold text-purple-700 mr-2 flex items-center">
            <Calendar className="h-6 w-6 text-purple-600 mr-2" />
            <span>ULife</span>
          </div>
          <span className="text-sm text-purple-500 hidden sm:inline">
            {userType === 'admin' ? 'Painel de Configuração' : 'Calendário Acadêmico'}
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-purple-600 hover:bg-purple-100">
            <Bell className="h-5 w-5" />
          </Button>
          {userType === 'admin' && (
            <Button variant="ghost" size="icon" className="text-purple-600 hover:bg-purple-100">
              <Settings className="h-5 w-5" />
            </Button>
          )}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-purple-700 hidden md:inline">{userName}</span>
            <Avatar className="h-8 w-8">
              <AvatarImage src="" alt={userName} />
              <AvatarFallback className="bg-purple-100 text-purple-700">
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
