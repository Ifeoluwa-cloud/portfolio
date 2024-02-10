import Button from "./features/Button";
import Circle from "./features/Circle";
const Navbar = () => {
    let Links = [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/' },
        {name: 'Service', link: '/'},
        {name: 'Contact', link: '/' }
    ]
  return (
    <>
        <nav className='md:px-14 px-4 max-w-screen-2xl mx-auto text-primary relative mt-0 right-0 left-0'>
            <div className='text-lg font-semibold mx-auto flex justify-between items-center z-50'>
                    {/*logo here */}
                    <div className="font-extrabold">GIO<span className="text-red-500">Code</span></div>

                    {/*nav links here */}
                    <ul className="flex pl-10 md:pl-0 z-2">
                        {Links.map(({ name, link }) => (
                            <li className="my-7 md:my-0 md:ml-10 block hover:text-gray-30 z-50" key={name}>
                                <a href={link}>{name}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Call to Action Button */}
                    <Button />
            </div>
        </nav>    
    </>
  )
}

export default Navbar
