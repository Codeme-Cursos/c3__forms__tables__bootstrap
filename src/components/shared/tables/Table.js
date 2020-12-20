const Table = ({ headers = [], children }) => {
    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    {
                        headers.length > 0 &&
                        headers.map(header => <th
                            key={header}
                            className={`w-${header.split(',')[1]}`}
                        >
                            {header.split(',')[0]}
                        </th>)
                    }
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default Table
