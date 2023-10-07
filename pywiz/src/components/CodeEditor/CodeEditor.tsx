import React, {useState} from 'react'
import AceEditor from 'react-ace'
import { Collapse, Select, Col, Row } from 'antd'

const version_options = [
  {label: '3.11.4', value: '3.11.4'},
]

import 'ace-builds/src-noconflict/mode-python'

import 'ace-builds/src-noconflict/theme-ambiance'
import 'ace-builds/src-noconflict/theme-chaos'
import 'ace-builds/src-noconflict/theme-chrome'
import 'ace-builds/src-noconflict/theme-clouds'
import 'ace-builds/src-noconflict/theme-clouds_midnight'
import 'ace-builds/src-noconflict/theme-cobalt'
import 'ace-builds/src-noconflict/theme-dawn'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-github_dark'
import 'ace-builds/src-noconflict/theme-gob'
import 'ace-builds/src-noconflict/theme-kuroir'
import 'ace-builds/src-noconflict/theme-merbivore'
import 'ace-builds/src-noconflict/theme-merbivore_soft'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-nord_dark'
import 'ace-builds/src-noconflict/theme-tomorrow'
import 'ace-builds/src-noconflict/theme-tomorrow'
import 'ace-builds/src-noconflict/theme-tomorrow_night'
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/theme-xcode'
// files.forEach((file) => {
//   console.log(file);
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const module = require(file);
// })

export default function CodeEditor() {
  const theme_options = [
    {label: 'Ambince', value: 'ambiance'},
    {label: 'Chaos', value: 'chaos'},
    {label: 'Chrome', value: 'chrome'},
    {label: 'Clounds', value: 'clounds'},
    {label: 'clouds_midnight', value: 'clouds_midnight'},
    {label: 'cobalt', value: 'cobalt'},
    {label: 'dawn', value: 'dawn'},
    {label: 'github', value: 'github'},
    {label: 'github_dark', value: 'github_dark'},
    {label: 'gob', value: 'gob'},
    {label: 'kuroir', value: 'kuroir'},
    {label: 'merbivore', value: 'merbivore'},
    {label: 'merbivore_soft', value: 'merbivore_soft'},
    {label: 'monokai', value: 'monokai'},
    {label: 'nord_dark', value: 'nord_dark'},
    {label: 'tomorrow', value: 'tomorrow'},
    {label: 'tomorrow_night', value: 'tomorrow_night'},
    {label: 'tomorrow_night_bright', value: 'tomorrow_night_bright'},
    {label: 'twilight', value: 'twilight'},
    {label: 'xcode', value: 'xcode'}
  ]

  const [version, setVersion] = useState('3.11.4');
  const [theme, setTheme] = useState('monokai');
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
      <Row>
        <Col span={12}>Version: <Select options={version_options} defaultActiveFirstOption={false} defaultValue={version} ></Select></Col>
        <Col span={12}>Theme: <Select options={theme_options} onChange={handleThemeChange} defaultActiveFirstOption={false} defaultValue={theme} style={{width: '200px'}}></Select></Col>
      </Row>
    <AceEditor
    mode="python"
    theme={theme}
    name="python-editor"
    editorProps={{ $blockScrolling: true }}
    style={{ width: '100%', height: '500px', marginTop: '20px'}}
    value={code}
    onChange={handleChange}
  />
  </React.Fragment>
  )
}
