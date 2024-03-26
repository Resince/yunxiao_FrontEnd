const CombButton = ({ func, msg }) => {
    return (
        <button
            className="block min-w-[290px] bg-custom-red min-h-[80px]
            rounded-[13px] text-[20px] font-semibold text-white tracking-[2px]
            hover:bg-red transition-all duration-120 ease-in-out"
            onClick={func}
        >
            {msg}
        </button>
    );
};

export default CombButton;
