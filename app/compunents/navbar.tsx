
const NavBar = () => {
    return (
        <div className="flex justify-between mr-20 ml-20  bg-[#2F1893] p-4 sticky " >
            <div className="text-white">
                <a href="#" className="mr-4">Startup 3</a>
            </div>

            <div className="text-white">
                <a href="#" className="mr-4">Overview</a>
                <a href="#" className="mr-4">Price</a>
                <a href="#" className="mr-4">Blog</a>
                <a href="#" className="mr-4">Feedback</a>
                <a href="#" className="bg-[#E93A7D] text-white px-4 py-2 rounded-full">Purchase</a>
            </div>
        </div>
    )
}

export default NavBar