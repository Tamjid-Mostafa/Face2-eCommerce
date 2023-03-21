export default function MenuButton({
    onClick,
    isMenuOpen,

}) {
    return (
        <>
            <button
                className={`relative w-14 h-14  rounded-full lg:hidden flex flex-col items-start  justify-center  ${!isMenuOpen ? "space-y-[6px]" : ""}`}
                onClick={onClick}
            >
                <span className={`h-[2px]   z-[10] ${!isMenuOpen ? "w-7 bg-secondary hover:bg-secondary-2" : "w-6 mb-[-1px] rotate-45 bg-secondary hover:bg-secondary-2 "}`}></span>
                <span className={`h-[2px]   z-[10] ${!isMenuOpen ? "w-7 bg-secondary hover:bg-secondary-2" : "hidden"}`}></span>
                <span className={`h-[2px]   z-[10] ${!isMenuOpen ? "w-7 bg-secondary hover:bg-secondary-2" : "w-6 mb-[-1px]  bg-secondary hover:bg-secondary-2 -rotate-45 "}`}></span>
            </button>

        </>
    );
}

