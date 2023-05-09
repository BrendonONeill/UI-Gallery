

type PropTypes = {
    theme: boolean,
    title: string,
    children: JSX.Element[]

}

function  ContentContainer({children, theme, title} : PropTypes)
{
    return(
        <>
        <div className="content-container" data-theme={theme? "light-content-container": "dark-content-container"}>
         <h1 className="content-container-header">{title}</h1>
         <div className="cardGrid">
         {children.map((child) => {
            return (child)
         })}
         </div>
        </div>
        
        </>
    );
}

export default ContentContainer