import React, {useState} from 'react'
import AceEditor from 'react-ace'
import { Collapse, Select } from 'antd'
import * as glob from 'glob'
import 'ace-builds/src-noconflict/*'

const version_options = [
  {label: '3.11.4', value: '3.11.4'},
]

const files = glob.sync('ace-builds/src-noconflict/theme-*')
files.forEach((file) => {
  const module = require(file);
})

// interface EditorOptions {
//     code: string;
//     setCode: React.Dispatch<React.SetStateAction<string>>;
//     theme: string;
// }

export default function CodeEditor() {
  const theme_options = [
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''}
  ]
  const [theme, setTheme] = useState('monika');
  const [code, setCode] = useState<string>("#!/pywiz/env python3.11")
  const handleThemeChange = (value: string) => {
    setTheme(value);
  }
    const handleChange = (newCode: string) => {
        setCode(newCode)
    }
    console.log(code);
  return (
    <React.Fragment>
    <Collapse.Panel
    key={'0'}
    header={'Python Code Editor'} 
    extra={[
      <Select options={version_options} ></Select>,
      <Select options={theme_options} onChange={handleThemeChange}></Select>
    ]
    }
    />
    <AceEditor
    mode="python"
    theme={theme}
    name="python-editor"
    editorProps={{ $blockScrolling: true }}
    style={{ width: '100%', height: '500px' }}
    value={code}
    onChange={handleChange}
  />
  </React.Fragment>
  )
}
