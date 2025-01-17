'use client'

import { LuBell, LuChevronDown, LuLogOut } from 'react-icons/lu'

import {
  Avatar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components'

import { useViews } from '@/contexts/ViewsProvider'

import { IView, viewsData } from '@/data/views'

interface IUserMenuProps {}

const UserMenu: React.FC<IUserMenuProps> = ({}) => {
  const { activeView, handleChangeActiveView } = useViews()

  const userName = 'Henrique Garcia'
  const userOrganization = 'Organização'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-[10px] h-full px-[10px] rounded-[4px] border border-border-primary cursor-pointer">
          <Avatar name={userName} />
          <div className="hidden flex-col sm:flex gap-[2px]">
            <b className="text-[14px] leading-[14px] text-color-primary">
              {userName}
            </b>
            <p className="text-[12px] leading-[12px] text-color-legend">
              {userOrganization}
            </p>
          </div>
          <div className="ml-[2px]">
            <LuChevronDown className="text-[18px]" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]" align="end">
        <DropdownMenuLabel>Acesso rápido</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex sm:hidden">
          <LuBell />
          <span>Notificações</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {viewsData.map((menu: IView) => {
          if (!menu.visible) return null
          const isActive = menu.path === activeView

          return (
            <DropdownMenuItem
              key={menu.id}
              active={isActive}
              onClick={() => handleChangeActiveView(menu.path)}
              disabled={!menu.active}
            >
              {menu.icon}
              {menu.label}
            </DropdownMenuItem>
          )
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => console.log('Saindo...')}>
          <LuLogOut />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu
