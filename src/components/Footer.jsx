import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const youtube = <FontAwesomeIcon icon={faYoutube} />
    const instagram = <FontAwesomeIcon icon={faInstagram}/>

    return(
        <>
            <div className="bg-black text-white">
                <div className="container py-10 mx-auto grid grid-cols-3 space-x-3">
                    <div>
                        <h2 className='text-3xl font-bold content-center'>
                            Follow Us
                        </h2>
                        <div className='text-5xl space-x-5 my-5'>
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
                    <div>
                        <h2 className='text-3xl font-bold content-center'>
                            Office
                        </h2>
                        <p className='my-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, natus?
                        </p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold content-center'>
                            Contact
                        </h2>
                        <p className='my-5'>
                            Phone : 0812-9820-8096
                        <br/>
                            email : <br/>galihrizkyfahrezy @gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}