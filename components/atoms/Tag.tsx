const Tag = ({ label } : { label : string }) => {
  return (
    <span className='text-sm rounded-full border-[1.5px] border-white-200 text-white-200 px-4 py-0.5 mr-2 mb-2'>{label}</span>
  )
}

export default Tag