import React from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-nord_dark';

interface EditorOptions {
    code: string;
    setCode: React.Dispatch<React.SetStateAction<string>>;
}

export default function CodeEditor({code, setCode} : EditorOptions) {
    const handleChange = () => {
        setCode(code)
    }
  return (
    <AceEditor
    mode="python"
    theme="nord_dark"
    name="python-editor"
    editorProps={{ $blockScrolling: true }}
    style={{ width: '100%', height: '680px' }}
    value={code}
    onChange={handleChange}
  />
  )
}
