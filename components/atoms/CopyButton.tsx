import { useState } from 'react'

const CopyButton = ( { link } : { link: string }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 4000);
            })
            .catch(err => console.error('Failed to copy: ', err));
    }

    return (
        <div>
            <input 
                type="text" 
                value={link} 
                readOnly 
                className='font-semibold text-white-100 border-gray-500 bg-transparent border-3 border-opacity-80 focus:ring-2 focus:ring-purple rounded-md'
            />
            <button 
                onClick={copyToClipboard}
                className='rounded-md ml-2 p-2 bg-purple'
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}

export default CopyButton