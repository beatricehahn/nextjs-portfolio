export const DiagonalArrowIcon = ({ color, w, h } : { color : string, w : number, h : number }) => {
    return (
        <svg className="inline" width={w} height={h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2002_4)">
                <path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" fill={color}/>
            </g>
            {/* <defs>
                <clipPath id="clip0_2002_4">
                    <rect width={w} height={h} fill={color}/>
                    </clipPath>
            </defs> */}
        </svg>
    );
}