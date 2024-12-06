import React from 'react'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';

const SideSticky = () => {
  return (
    <div className='flex flex-col fixed mt-24'>
      <button className="bg-amber-500 border border-gray-300 w-10 h-10 text-center text-2xl text-red"> <BookmarkOutlinedIcon/></button>
      <button className="bg-amber-500 border border-gray-300 w-10 h-10 text-2xl"><AddLocationAltIcon/></button>
      <button className="bg-amber-500 border border-gray-300 w-10 h-10 text-2xl"><SettingsPhoneIcon/></button>
    </div>
  )
}

export default SideSticky
