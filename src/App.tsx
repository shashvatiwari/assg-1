import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

interface Artwork {
  id: number;
  title: string;
  place_of_origin: string | null;
  artist_display: string;
  inscriptions: string | null;
  date_start: number;
  date_end: number;
}

interface ApiResponse {
  data: Artwork[];
  pagination: {
    total: number;
    current_page: number;
    total_pages: number;
  };
}

const App: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedRows, setSelectedRows] = useState<Artwork[]>([]);
  const [rowSelectionCount, setRowSelectionCount] = useState<number>();
  const op = useRef<OverlayPanel>(null);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=${page}`
      );
      const data: ApiResponse = await response.json();
      setArtworks(data.data);
      setTotalRecords(data.pagination.total);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (event: any) => {
    setPage(event.page + 1);
  };

  const handleRowSelect = (e: { value: Artwork[] }) => {
    setSelectedRows(e.value);
  };

  const isSelected = (rowData: Artwork) =>
    selectedRows.some((selected) => selected.id === rowData.id);

  const handleRowSelectionSubmit = async () => {
    let remainingRowsToSelect = rowSelectionCount ?? 0;
    let currentPage = page;
    let selected: Artwork[] = [];

    while (remainingRowsToSelect > 0 && currentPage <= Math.ceil(totalRecords / 10)) {
      await fetchData(currentPage);
      const rowsToSelect = artworks.slice(0, remainingRowsToSelect);
      selected.push(...rowsToSelect);
      remainingRowsToSelect -= rowsToSelect.length;
      currentPage++;
    }

    setSelectedRows(selected);
    op.current?.hide();
  };

  const renderHeader = () => {
    return (
      <div className="table-header">
        <span>Title</span>
        <Button
          icon="pi pi-chevron-down"
          className="p-button-rounded p-button-text dropdown-icon"
          onClick={(e) => op.current?.toggle(e)}
        />
        <OverlayPanel ref={op} className="custom-overlay-panel">
          <div className="overlay-content">
            <input
              type="number"
              id="rowCount"
              value={rowSelectionCount}
              onChange={(e) => setRowSelectionCount(parseInt(e.target.value))}
              style={{ width: '100px', margin: '10px 0px', padding:'5px', borderRadius:'5px', background:'none', color:'gray' }}
              placeholder="Select rows..."
            />
            <Button label="Submit" style={{background: 'none', color: 'black', border:'1px solid black'}} onClick={handleRowSelectionSubmit} />
          </div>
        </OverlayPanel>
      </div>
    );
  };

  return (
    <div className="App">
      <DataTable
        value={artworks}
        paginator
        rows={10}
        totalRecords={totalRecords}
        lazy
        loading={loading}
        onPage={handlePageChange}
        selection={selectedRows}
        onSelectionChange={handleRowSelect}
        rowClassName={(rowData) =>
          isSelected(rowData) ? 'selected-row' : ''
        }
        selectionMode="multiple"
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
        <Column field="title" header={renderHeader()}></Column>
        <Column field="place_of_origin" header="Place of Origin"></Column>
        <Column field="artist_display" header="Artist"></Column>
        <Column field="inscriptions" header="Inscriptions"></Column>
        <Column field="date_start" header="Date Start"></Column>
        <Column field="date_end" header="Date End"></Column>
      </DataTable>
    </div>
  );
};

export default App;
