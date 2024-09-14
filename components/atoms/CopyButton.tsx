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
                className='font-semibold text-purple-bright border-white-200 bg-white border-2 border-opacity-70 focus:ring-2 focus:ring-purple rounded-[8px]'
            />
            <button 
                onClick={copyToClipboard}
                className='rounded-[8px] ml-[16px] px-[16px] py-[10px] bg-purple-bright text-white'
            >
                {copied ? 'Copied!' : 'Copy Address'}
            </button>
        </div>
    )
}

export default CopyButton