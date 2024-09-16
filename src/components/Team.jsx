export default function Team(){
    return(
        <>
            <div id="team" className="container mx-auto py-10 my-10 border-t-2 border-black">
                <h1 className="text-5xl font-bold text-center">
                    Team
                </h1>
                <div className=" my-5 grid md:grid-cols-4 grid-cols-2">

                    <div>
                        <img src="https://placehold.co/200" className="mx-auto rounded-full"></img>
                        <h2 className="text-center font-bold my-2 py-1 w-4/6 mx-auto rounded-xl
                        bg-blue-300">
                            Agus Ananda
                        </h2>
                        <p className="text-center">
                            staff
                        </p>
                    </div>

                    <div>
                        <img src="https://placehold.co/200" className="mx-auto rounded-full"></img>
                        <h2 className="text-center font-bold my-2 py-1 w-4/6 mx-auto rounded-xl
                        bg-blue-300">
                            Aditya R.
                        </h2>
                        <p className="text-center">
                            staff
                        </p>
                    </div>

                    <div>
                        <img src="https://placehold.co/200" className="mx-auto rounded-full"></img>
                        <h2 className="text-center font-bold my-2 py-1 w-4/6 mx-auto rounded-xl
                        bg-blue-300">
                            Putri Mualani
                        </h2>
                        <p className="text-center">
                            staff
                        </p>
                    </div>

                    <div>
                        <img src="https://placehold.co/200" className="mx-auto rounded-full"></img>
                        <h2 className="text-center font-bold my-2 py-1 w-4/6 mx-auto rounded-xl
                        bg-blue-300">
                            Dendi
                        </h2>
                        <p className="text-center">
                            staff
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}