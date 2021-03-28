

export function generateCrawlJobsTable(crawlUrls) {
    return (
        <div>
            <h1>Current Crawl Jobs</h1>
            <table><tbody>
                <tr>
                    <td className="VideoTableHeaderRowStyle">Position</td>
                    <td className="VideoTableHeaderRowStyle">URL</td>
                    <td className="VideoTableHeaderRowStyle">Status</td>
                </tr>
                {(Object.keys(crawlUrls).length !== 0) ? 
                    crawlUrls.map(u => {
                        return (
                            <tr>
                                <td>{u.position}</td>
                                <td>{u.crawl_url}</td>
                                <td>{u.status}</td>
                            </tr>
                        );
                    })
                : <div/>}
            </tbody></table>
        </div>
    )
}

export function generateCrawledVideosTable(crawledVideos) {
    return (
        <div>
            <h1>Latest Crawled Videos</h1>
            <table><tbody>
                <tr>
                    <td className="VideoTableHeaderRowStyle">Title</td>
                    <td className="VideoTableHeaderRowStyle">Season</td>
                    <td className="VideoTableHeaderRowStyle">Episode</td>
                    <td className="VideoTableHeaderRowStyle">Creation Date</td>
                    <td className="VideoTableHeaderRowStyle">URL</td>
                </tr>
                {(Object.keys(crawledVideos).length !== 0) ? 
                    crawledVideos.map(v => {
                        return (
                            <tr key={v.uuid}>
                                <td>{v.title}</td>
                                <td>{v.season}</td>
                                <td>{v.episode_number}</td>
                                <td>{v.creation_date}</td>
                                <td>{v.url}</td>
                            </tr>
                        );
                    })
                : <div/>
                }
            </tbody></table>
        </div>
    )
}

export function generateDownloadQueuedJobsTable(queuedDownloadData) {
    return (
        <div>
            <h1>Queued Downloads</h1>
            <table><tbody>
                <tr>
                    <td className="VideoTableHeaderRowStyle">Job UUID</td>
                    <td className="VideoTableHeaderRowStyle">Title</td>
                    <td className="VideoTableHeaderRowStyle">Season</td>
                    <td className="VideoTableHeaderRowStyle">Episode</td>
                    <td className="VideoTableHeaderRowStyle">Status</td>
                </tr>
                {(Object.keys(queuedDownloadData).length !== 0) ? 
                    queuedDownloadData.map(u => {
                        return (
                            <tr>
                                <td>{u.id}</td>
                                <td>{u.arguments[0].title}</td>
                                <td>{u.arguments[0].season}</td>
                                <td>{u.arguments[0].episode_number}</td>
                                <td>{u.status}</td>
                            </tr>
                        );
                    })
                : <div/>
                }
            </tbody></table>
        </div>
    )
}


export function generateDownloadRunningJobsTable(runningDownloadData) {
    return (
        <div>
            <h1>Running Downloads</h1>
            <table><tbody>
                <tr>
                    <td className="VideoTableHeaderRowStyle">Job UUID</td>
                    <td className="VideoTableHeaderRowStyle">Title</td>
                    <td className="VideoTableHeaderRowStyle">Season</td>
                    <td className="VideoTableHeaderRowStyle">Episode</td>
                    <td className="VideoTableHeaderRowStyle">Status</td>
                    <td className="VideoTableHeaderRowStyle">Percentage</td>
                </tr>
                {(Object.keys(runningDownloadData).length !== 0) ? 
                    (runningDownloadData.map(u => {
                        return (
                            <tr>
                                <td>{u.id}</td>
                                <td>{u.arguments[0].title}</td>
                                <td>{u.arguments[0].season}</td>
                                <td>{u.arguments[0].episode_number}</td>
                                <td>running</td>
                                <td>{Math.floor(u.percentage_completion)}%</td>
                            </tr>
                        );
                    })) 
                : <div/>}
            </tbody></table>
        </div>
    ) 
}

export function generateSavedVideosTable(savedVideos) {
    return (
        <div>
            <h1>Downloaded Videos</h1>
            <table><tbody>
                <tr>
                    <td className="VideoTableHeaderRowStyle">Title</td>
                    <td className="VideoTableHeaderRowStyle">Season</td>
                    <td className="VideoTableHeaderRowStyle">Episode</td>
                    <td className="VideoTableHeaderRowStyle">Creation Date</td>
                </tr>
                {(Object.keys(savedVideos).length !== 0) ? 
                    savedVideos.map(v => {
                        return (
                            <tr>
                                <td>{v.title}</td>
                                <td>{v.season}</td>
                                <td>{v.episode_number}</td>
                                <td>{v.creation_date}</td>
                            </tr>
                        );
                    })
                : <div/>
                }
            </tbody></table>
        </div>
    )
}
