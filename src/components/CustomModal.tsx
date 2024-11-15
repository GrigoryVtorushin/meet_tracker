

const CustomModal = ({active, setActive, children}) => {
    return (
        <div className={`z-50 h-lvh w-lvw bg-black bg-opacity-40 fixed top-0 left-0 flex items-center justify-center transform ${active ? 'pointer-events-auto' : 'opacity-0 pointer-events-none'} transition duration-300`} onClick={() => setActive(false)}>
            <div className={'p-8 rounded-2xl bg-zinc-800 bg-opacity-100 max-w-xl w-full mx-4 '} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;