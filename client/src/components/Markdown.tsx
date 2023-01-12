import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface Props {
    children: string,
    code: string,
    language: string
}

export function Markdown({ children, code, language }: Props) {
    return (
    <ReactMarkdown className='markdown' components={{
        code() {
            return (
                <SyntaxHighlighter language={language}>
                    {code}
                </SyntaxHighlighter>
            )
        }
    }} >
        {children}
    </ReactMarkdown>)
}