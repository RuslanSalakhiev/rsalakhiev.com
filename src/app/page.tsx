import Link from 'next/link';


export default function Home() {

    return (
        <div className='p-10'>
            <div className='flex flex-col'>
                <span className='gradientTitle'>curios</span>
                {/* <span> or Ruslan Salakhiev playground</span> */}
            </div>
            {/* <div>
                Projects: 
                <ul>
                    <li><Link href="/norm">Uzhe norm?</Link></li>
                    <li><Link href="/styleroulette">Styleroulette</Link></li>
                </ul>
            </div> */}
        </div>
    );
}
