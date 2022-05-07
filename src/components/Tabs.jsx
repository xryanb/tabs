import React, {useState} from 'react';

const Tabs = (props) => {
const [valSelected, setValSelected] = useState(0);


const everyTab = {
    margin:'10px',
    width:'50px',
    height:'25px',
    display: 'inline-block',
    textAlign:'center',
    border:'2px solid black',
    backgroundColor:""
    };

const borderStyle={
    border:'2px solid black',
    width:'300px',
    height:'100px',
    margin:'0 auto'
};
    

const changeTab = (tab) => {
    setValSelected(tab);
    //tbh i have this code here but it doesn't run when i click on it
    // will get back to it when i do more reading
    //thank you for the patience
    everyTab.backgroundColor='black'
    };
        
    

return (
    <div>
        {
        props.tabLabels.map( (tab, i) => {
            return(
            <div onClick={ () => changeTab( i) } style={ everyTab }>
                <p key={i} >{tab.tab}</p>
            </div>
            )
        })
        }
    <div style={borderStyle}>
        {<p>{props.tabLabels[valSelected].content}</p>}
        </div>
    </div>
    );
}

export default Tabs;