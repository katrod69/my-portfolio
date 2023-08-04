import React, {useState} from "react";
import { Document, Page } from 'react-pdf';
import mypdf from  '../images/KatherineRodriquez.pdf';


export default function ResumeViewer() {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    
   
        <Document file = {mypdf}
        onLoadSuccess={onDocumentLoadSuccess}
        > 
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ),
        )}
      </Document>
    );
  }
  

