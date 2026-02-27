import { TableWrapper, Table, TableHead, TableRow, TableHeader, TableBody, TableData } from "./DataTableStyled"
import { urls } from "../../data/url"

export function DataTableComponent() {
  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Usuario</TableHeader>
            <TableHeader>URL</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((item, index) => (
            <TableRow key={index}>
              <TableData>{item.user}</TableData>
              <TableData><a href={item.url} target="_blank">{item.url}</a></TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  )
}