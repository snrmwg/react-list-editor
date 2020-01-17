import React, {useState} from 'react';
import List from "./List";
import {createGlobalStyle} from 'styled-components'
import Editor from "./Editor";
import SidePanel from "./SidePanel";

const GS = createGlobalStyle`
*, *:before, *:after { box-sizing: border-box;}
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, 
button, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, 
samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, 
label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, 
mark, audio, video {margin: 0;padding: 0;border: 0;font-size: 100%;font-weight: inherit;font-variant: inherit;font-style: inherit;font-family: inherit;vertical-align: baseline;}

body{font-size: 17px; line-height: 27.92px; font-family: Helvetica, sans-serif; color:#1a1a1a;}
`;

function App() {
    const [selected, setSelected] = useState();
    const [edited, setEdited] = useState();

    const items = ['A', 'B', 'C', 'D'];

    return (
        <>
            <GS/>
            <div className="App">
                <List items={items} selected={selected} onSelect={setSelected} onEdit={setEdited}/>
                {edited && <SidePanel><Editor item={edited} onClose={() => setEdited(null)}/></SidePanel>}
            </div>
        </>
    );
}

export default App;
