
const TextBox = () => {
    return (
        <div className=' flex justify-between mr-20 ml-20  bg-[#2F1893]'>
            {/* Left Side */}
            <div className="text-white flex flex-col gap-5 ">
                <div className="text-5xl font-bold ">
                    <h1 className="py-2">Generate</h1>
                    <h1 className="py-2">Awesome Web</h1>
                    <h1 className="py-2">Pages</h1>
                </div>
                <p className="text-xl">
                    The most important part of the <br /> Startup is the samples. The <br />samples  from a set of 25 usable  <br />  pages you can use as is or you can <br />add new blocks.
                </p>
                <button className="bg-[#E93A7D] text-white px-4 py-2 rounded-full">Learn More</button>
            </div>
            {/* Right side */}
            <div className="bg-white flex flex-col p-5 rounded-[10px] w-[470px] h-[600px] items-center gap-3">
                <p className="text-center text-violet-950 text-[42px] font-bold font-['DM Sans']">
                    Sign Up Now
                </p>
                <input
                    className="my-2 border border-1 border-gray-100 p-3 rounded-full focus:outline-1 outline-blue-600 w-[330px] h-[50px]"
                    type="text"
                    placeholder="Your email"
                />
                <input
                    className="my-2 border border-1 border-gray-100 p-3 rounded-full focus:outline-1 outline-blue-600 w-[330px] h-[50px]"
                    type="password"
                    placeholder="Your password"
                />

                <div className="text-slate-900 text-opacity-40 text-base font-normal">
                    <div className="">
                        <input
                            type="checkbox"
                            name="ch"
                            id="ch"
                            className="mr-2 text-[#23DAC4]"
                        />
                        <span className="text-md">
                            I agree to the Terms of Service.
                        </span>
                    </div>
                </div>

                <button className="bg-[#482BE7] my-2 py-2 text-lg font-bold text-white rounded-full hover:bg-[#2F1893] w-[330px] h-[50px]">
                    Sign in
                </button>
                <div className="flex items-center w-[328px] h-[26px]">
                    <hr className="flex-1 border-t-2 border-gray-300" />
                    <span className="mx-4 text-slate-900 text-opacity-40">
                        or
                    </span>
                    <hr className="flex-1 border-t-2 border-gray-300" />
                </div>
                <button className="bg-[#1EA1F1] my-2 py-2 text-lg font-bold text-white rounded-full hover:bg-[#1973af] w-[330px] h-[50px]">
                    Login via Twitter
                </button>
                <div className="flex">
                    <p className="text-slate-900 text-opacity-40">
                        Do you have an Account?
                    </p>
                    <p className="text-[#23DAC4] cursor-pointer">
                        Sign In
                    </p>
                </div>
            </div>

        </div>
    )
}

export default TextBox