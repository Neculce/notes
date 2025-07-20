const Nlist = ({notes}) => {
 

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
    {notes.map((note)=>(
    
        <div>
            <div>
                <strong>Title</strong>
            </div>    

            <p> Notes Description</p>

            <small>Last modified</small>

        </div>
    ))}
    </div>
  );
};

export default Nlist;
