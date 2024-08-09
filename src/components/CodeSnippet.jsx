import hljs from 'highlight.js'
import kotlin from "highlight.js/lib/languages/kotlin";
import "highlight.js/styles/monokai.css";
import {useEffect, useRef} from "react";
import PropTypes from "prop-types";

hljs.registerLanguage("kotlin", kotlin);

const CodeSnippet = ({code}) => {
    const codeRef = useRef(null);
    useEffect(() => {
        hljs.highlightBlock(codeRef.current);
    }, []);
    return (
        <div>
            <pre className="rounded-lg p-4 bg-[#272822]">
                <code className="kotlin" ref={codeRef}>
                    {
code
                    }
                </code>
            </pre>
        </div>
    );
};

CodeSnippet.propTypes = {
    component: PropTypes.string.isRequired,
}

export default CodeSnippet;