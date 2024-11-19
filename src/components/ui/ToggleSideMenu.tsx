import { LuMenu } from 'react-icons/lu'

interface IToggleSideMenuProps {}

const ToggleSideMenu: React.FC<IToggleSideMenuProps> = ({}) => {
  return (
    <div className="flex w-[30px] h-[30px] rounded-[6px] justify-center items-center bg-[var(--bg-active-secondary)] border border-red-500">
      <LuMenu className="text-lg text-[var(--font-primary)]" />
    </div>
  )
}

export default ToggleSideMenu