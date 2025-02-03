import Image from 'next/image';

export default function Banner() {
    return (
        <div className="flex flex-col justify-between items-center text-white">
            <Image src={'/banner.jpg'} alt={'Banner'} className='w-full' width={1920} height={0}  />
        </div>
    )
}