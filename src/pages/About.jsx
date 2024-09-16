import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faInstagram, faYoutube,} from '@fortawesome/free-brands-svg-icons'


export default function About(){
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const youtube = <FontAwesomeIcon icon={faYoutube} />
    const instagram = <FontAwesomeIcon icon={faInstagram}/>

    return(
        <>
            <div id='about' className="md:text-left text-black text-center my-5">
                <h2 className="md:hidden text-3xl font-bold">
                    About Us
                </h2>
                <div className="md:flex container mx-auto space-x-5">
                    <img src="https://placehold.co/300" className=' mx-auto my-5'></img>
                    <div className='md:my-5 '>
                        <h2 className="md:inline text-3xl font-bold hidden">
                            About Us
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt illum quaerat necessitatibus culpa ipsam hic quis maxime aliquam delectus. Molestias sequi repudiandae facilis quia eum voluptatem nesciunt porro! Cum, quidem.
                        </p>
                        <br/>
                        <p className="border-b-2 border-gray-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, id sequi ad aperiam eligendi culpa excepturi harum labore voluptatibus veniam iusto et qui inventore similique ea quam minus consequuntur suscipit?
                        </p>
                        <div className='text-5xl space-x-5'>
                            <a href='' className='hover:text-red-600'>
                                {youtube}
                            </a>
                            <a href='' className='hover:text-blue-600'>
                                {twitter}
                            </a>
                            <a href='' className='hover:text-red-300'>
                                {instagram}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}