const Neditor = ({onSaveNote}) => {
     {/*Placeholder notes — eventually this will be props or state*/}
    return(
        <div>
            <div>
                <button
                 onClick={onSaveNote} 
                 className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                    Save
                </button>
            </div>

        <p>Hello World. This shall be the note editor</p>

       </div>
    );
};

export default Neditor;