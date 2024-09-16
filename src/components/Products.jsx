
export default function Products(props){

    return(
        <>
            <div id="products" className="md:flex space-x-7 px-3 py-5">
                <div className='md:text-5xl text-3xl mx-auto  md:py-10 w-2/12'>
                    {props.icon}
                </div>
                <div className="w-10/12 py-5">
                    <h2 className="text-3xl font-bold">
                        {props.title}
                    </h2>
                    <p className="border-b-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusamus vitae! Sunt necessitatibus provident quae consequuntur quasi commodi quia facere consequatur unde. Sunt praesentium repudiandae fuga consequatur quia itaque commodi?
                    </p>
                    <a href="" className="text-xl text-blue-400 hover:text-blue-600 font-bold border-b-2 border-transparent hover:border-blue-300">
                        Learn more &gt;&gt;
                    </a>
                </div>
            </div>
        </>
    );
}