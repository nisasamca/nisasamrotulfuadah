    "use client";
    import Image from "next/image"

    interface CertificationCardProps {
    image: string
    file?: string
    title: string
    description: string
    }

    export default function CertificationCard({
    image,
    file,
    title,
    description,
    }: CertificationCardProps) {
    return (
        <div className="rounded-2xl bg-white p-4 shadow-md">
        <a 
        className="block rounded-xl overflow-hidden mb-4 relative w-full h-48"
        href={file}
        target='_blank'
        rel="noopener noreferrer"
        >
            <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover cursor-pointer hover:scale-105 transition-transform"
            />  
        </a>

        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        </div>
    )
    }