const Form = ({ isVisible, onClose, updateData, user, children }) => {
    if (!isVisible) return null




    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[500px] flex flex-col'>
                <button className='text-white text-xl' onClick={() => onClose()}>
                    X
                </button>
                <div className='bg-white p-2 rounded'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Form
