

export default function Hero(){
    return(
        <>


        {
            <div className="bg-black">
                <div className=" container text-center mx-auto h-screen items-center md:flex flex-row-reverse gap-10 md:animate-fade">
                    <div className="">
                        <img src="src\assets\cable.jpg" className="w-screen"></img>
                    </div>
                    <div className="md:items-end md:text-right">
                        <h2 className="font-bold md:text-3xl text-white">
                            FIND SOLUTION IN EVERY SINGLE SCENARIO
                        </h2>
                        <p className="text-gray-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores voluptatem earum eveniet autem hic tenetur animi, nobis minus corrupti.
                        </p>
                    </div>

                </div>
            </div>
            }
        </>
    );
}