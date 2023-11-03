
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-7 py-6 md:px-28 md:py-8 items-center">
        <h1 className="text-xl md:text-3xl text-[#1A7408] font-bold">
          EcoHarvest
        </h1>
        <div className="flex items-center gap-3 md:gap-10">
          <div>
          <select name="" id="" className="text-xl">
            <option value="En">En</option>
          </select>
          </div>
          <div>
          <button className="bg-[#e49115] outline-none text-white py-2 md:py-4 px-4 md:px-8 font-medium rounded text-lg">Contact Us</button>
          </div>
        </div>
      </div>
      <nav className="bg-[#1A7408]">
        
      </nav>
    </div>
  )
}

export default Navbar
