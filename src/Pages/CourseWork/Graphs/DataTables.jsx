import DataT from 'react-data-table-component';
const columns = [
	{
		name: 'Title',
		selector: row => row.title,
	},
	{
		name: 'Year',
		selector: row => row.year,
	},
];

const data = [
  	{
		id: 1,
		title: 'Beetlejuice',
		year: '1988',
	},
	{
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
	},
]
let DataTables = (data) =>{
    return (
        <div>
            here we are now in datat tables
            <DataT
			    columns={columns}
			    data={data}
		    />
        </div>

    )
}
export default DataTables;