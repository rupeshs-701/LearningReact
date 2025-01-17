function customRender(reactElement,container)
{
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);

    //optimized one 
    for(const prop in reactElement.props)
    {
        if(prop === 'children')
        {
            continue;
        }
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}
const mainContainer = document.querySelector('#root');
// can use document.getElementById too  
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children:'Dekh kya raha h click kr na'
};

customRender(reactElement,mainContainer);