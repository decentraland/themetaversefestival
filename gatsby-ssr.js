const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents, pathname }) => {
   const SCRIPT_PAGES = ['/page-1', '/page-2'];

   if(SCRIPT_PAGES.includes(pathname)){
      setPostBodyComponents([
        <script dangerouslySetInnerHTML={{ __html:`your script here`}} />,
    ]);
  }
};
