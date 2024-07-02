export const FooterItem = ({ 
  title } : {
    title: string;
  }) => {
  return (
    <div>
        <h6>{title}</h6>
        <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
        </ul>
    </div>
  )
}
