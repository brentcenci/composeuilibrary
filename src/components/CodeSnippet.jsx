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
        <div className="rounded-lg p-4 bg-[#272822]">
            <div className="flex flex-row-reverse">
                <button onClick={() => navigator.clipboard.writeText(code)}>
                    <div className="text-gray-300 flex flex-row font-semibold">
                        Copy
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="gray" stroke-linejoin="round" stroke-width="2"
                                  d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"/>
                        </svg>
                    </div>
                </button>
            </div>
            <div>
                <pre>
                <code className="kotlin" ref={codeRef}>
                    {code}
                </code>
            </pre>
            </div>

        </div>
    );
};

CodeSnippet.propTypes = {
    component: PropTypes.string.isRequired,
}

export default CodeSnippet;