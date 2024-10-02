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
        <div className='md:inline md:ml-[8px]'>
            <input 
                type="text" 
                value={link} 
                readOnly 
                className='text-purple-bright bg-blue-100 border-opacity-70 focus:ring-2 focus:ring-purple rounded-[8px]'
            />
            <button 
                onClick={copyToClipboard}
                className='inline rounded-[8px] ml-[8px] px-[16px] py-[10px] bg-purple-bright text-white'
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}

export default CopyButton