import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';


export default function Home() {
  const editorRef = useRef()

  return (
    <div>
      <div style={{ width: "1000px", height: '500px', marginLeft: 'auto', marginRight: "auto", marginTop: "100px" }}>
        <Editor
          id='tiny-editor'
          apiKey="YOUR_TINYMCE_API_KEY" // Replace with your API key


          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={""}       // Replace with your initial content
          init={{
            table_tab_navigation: false,
            height: 500,
            menubar: true,
            branding: false,
            plugins: [
              'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
              'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
              'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount', 'footnotes'
            ],
            toolbar: 'undo redo | casechange blocks | bold italic backcolor | footnotes | ' +
              'alignleft aligncenter alignright alignjustify | ' +
              'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help ',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
      </div>
    </div>
  )
}
