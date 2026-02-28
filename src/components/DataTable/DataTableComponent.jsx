import { TableWrapper, Table, TableHead, TableRow, TableHeader, TableBody, TableData, StepsList, StepImage } from "./DataTableStyled"
import { Title, Subtitle } from "../../styles/Typography"
import { urls } from "../../data/url"

export function DataTableComponent() {
  return (
    <TableWrapper>
      <Title>Actualizar URL</Title>
      <Subtitle>
        Este paso es igual para todas las app que se utilizan, antes de hacer cualquier otra cosa,
        esto es lo primero que hay que hacer, a excepción de la aplicación XPRO.
        A continuación os doy los pasos de cómo actualizar vuestra URL:
      </Subtitle>

      <StepsList>
        <li>
          Teniendo vuestro usuario y contraseña, abrir el enlace dependiendo de cómo empiece vuestro usuario. 
          Los últimos empiezan todos por ff, pero si hubiese alguno diferente aparecería aquí debajo:
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
                  <TableData>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.url}
                    </a>
                  </TableData>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </li>

        <li>
          Al acceder al enlace aparecerá la siguiente imagen, en ella introducir vuestro username y password y pinchar en Retrieve Access Details
          <StepImage src="/DataTable/1.png" alt="weburl" />
        </li>

        <li>
          Os cargará una página en la que aparece un cuadro M3U playlist URL, debéis copiar todo el contenido de ese cuadro (cuadro rojo)
          <StepImage src="/DataTable/2.png" alt="urlusuario" />
        </li>

        <li>
          Os guardáis el enlace completo y este paso estaría listo. Yo suelo guardar las URL completas en las notas del móvil, así siempre tengo la última actualizada
        </li>
      </StepsList>
    </TableWrapper>
  )
}