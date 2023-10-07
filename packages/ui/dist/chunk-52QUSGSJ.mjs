import { jsxs, jsx } from 'react/jsx-runtime';

function c({className:r,title:a,children:n,href:s}){return jsxs("a",{className:r,href:`${s}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`,rel:"noopener noreferrer",target:"_blank",children:[jsxs("h2",{className:"text-lg text-red-500 hover:text-green-500",children:[a," ",jsx("span",{children:"->"})]}),jsx("p",{children:n})]})}

export { c as a };
