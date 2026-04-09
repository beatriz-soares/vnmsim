import { ReactCodeMirrorRef } from '@uiw/react-codemirror'

export const editorOptions = {
    highlightActiveLine: true,
    highlightActiveLineGutter: true,
    highlightSelectionMatches: true,
    lineNumbers: false
}

export const updateCode = (code:string, editor:ReactCodeMirrorRef):void => {
    if (!editor) {
        return
    }
    editor.view?.dispatch({
        changes: {
            from: 0,
            to: editor.view.state.doc.toString().length,
            insert: code
        }
    })
}