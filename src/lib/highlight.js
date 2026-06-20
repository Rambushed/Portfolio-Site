
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-bash'

export function highlight(code, lang) {
    return Prism.highlight(code, Prism.languages[lang], lang)
}