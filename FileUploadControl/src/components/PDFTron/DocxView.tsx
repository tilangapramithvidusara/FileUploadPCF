import { Spin } from "antd";
import * as React from "react";
import { useState, useEffect } from "react";
import {
    DocumentEditorContainerComponent, Toolbar
} from '@syncfusion/ej2-react-documenteditor';
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const PDFTron: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [docs, setDocs] = useState<[]>([]);

    // useEffect(() => {
    //     const fetchDocs = async () => {
    //         const fetchedDocs = [
    //             { uri: "https://url-to-my-pdf.pdf" },
    //             // { uri: require("./example-files/pdf.pdf") },
    //         ];
    //         setDocs(fetchedDocs);
    //         setLoading(false);
    //     };
    //     fetchDocs();
    // }, []);

    const fetchedDocs = [{ uri: "https://docs.google.com/document/d/1gmwbvqOJSe4AStY5wpEccA-38HAseKu4/edit?usp=sharing&ouid=115794783588610964206&rtpof=true&sd=true" }];

    return (
        <Spin spinning={loading}>
            {/* <DocViewer documents={fetchedDocs} pluginRenderers={DocViewerRenderers} className='doc-container' /> */}
            <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="https://docs.google.com/document/d/1gmwbvqOJSe4AStY5wpEccA-38HAseKu4/edit?usp=sharing&ouid=115794783588610964206&rtpof=true&sd=true" enableToolbar={true} />
        </Spin>
    );
};

export default PDFTron;
