
function PageContent({ title, children }) {
    return (
      <div className="pageContent">
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
  
  export default PageContent;