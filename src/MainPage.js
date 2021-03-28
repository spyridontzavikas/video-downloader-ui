import React from 'react';

import InputFieldPOSTRequest from "./InputFieldPOSTRequest";
import FetchedVideosTable from "./FetchedVideosTable";
import {generateCrawlJobsTable, generateCrawledVideosTable, generateDownloadQueuedJobsTable, 
    generateDownloadRunningJobsTable, generateSavedVideosTable} from "./AllTables";


function MainPage() {
    return <div>
        <InputFieldPOSTRequest 
            buttonText="Crawl Page" 
            titleText="Crawl Video URLs from page"
            endpointName="crawl-page" 
            generatePostBody={(urlValue) => JSON.stringify({ url: urlValue })} />
        <br />
        <FetchedVideosTable endpointName="list-crawl-jobs" 
            tableGenerateFunc={generateCrawlJobsTable} rowCount={10} />
        <br/>
        <FetchedVideosTable endpointName="list-latest-crawled-videos" 
            tableGenerateFunc={generateCrawledVideosTable} rowCount={10} />
        <br/>
        <InputFieldPOSTRequest 
            buttonText="Save Video" 
            titleText="Save Video URLs"
            endpointName="save-videos" 
            generatePostBody={(titleValue) => JSON.stringify({ title: titleValue })} />
        <br />
        <FetchedVideosTable endpointName="list-running-downloads" 
            tableGenerateFunc={generateDownloadRunningJobsTable} rowCount={10} />
        <FetchedVideosTable endpointName="list-pending-downloads" 
            tableGenerateFunc={generateDownloadQueuedJobsTable} rowCount={100} />
        <br />
        <FetchedVideosTable endpointName="list-latest-saved-videos" 
            tableGenerateFunc={generateSavedVideosTable} rowCount={10} />
    </div>
}

export default MainPage;