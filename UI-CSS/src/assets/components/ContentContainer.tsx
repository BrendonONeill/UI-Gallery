

function  ContentContainer({children, theme, title})
{
    return(
        <>
        <div className="content-container" data-theme={theme? "light-content-container": "dark-content-container"}>
         <h1 className="content-container-header">{title}</h1>
         {children.map((child) => {
            return (child)
         })}
        </div>
        
        </>
    );
}

export default ContentContainer