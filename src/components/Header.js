import React from 'react'

function Header() {
  return (
    <div className="flex flex-row p-4  text-white justify-center bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500">
      <img
        src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
        width="32"
        height="32"
        alt="emoji cat smiling"
      />
      <h1 className="text-3xl mx-4">Emoji Search</h1>
      <img
        src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
        width="32"
        height="32"
        alt="emoji cat cute"
      />
    </div>
  )
}

export default Header