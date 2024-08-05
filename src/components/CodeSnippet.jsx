import hljs from 'highlight.js'
import kotlin from "highlight.js/lib/languages/kotlin";
import "highlight.js/styles/monokai.css";
import {useEffect, useRef} from "react";

hljs.registerLanguage("kotlin", kotlin);

const CodeSnippet = () => {
    const codeRef = useRef(null);
    useEffect(() => {
        hljs.highlightBlock(codeRef.current);
    }, []);
    return (
        <>
            <pre>
                <code className="kotlin" ref={codeRef}>
                    {
`
@Composable
fun Card(modifier: Modifier) {
    Column(modifier: Modifier) {
        Text("hello")
        Text("world")
    }
}
`
                    }
                </code>
            </pre>
        </>
    );
};

export default CodeSnippet;