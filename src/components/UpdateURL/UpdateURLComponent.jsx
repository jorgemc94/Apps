import { TableWrapper, Table, TableHead, TableRow, TableHeader, TableBody, TableData, StepsList, StepImage } from "../UpdateURL/UpdateURLStyled"
import { urls } from "../../data/url"

export const UpdateURL = [
  {
    content: (
      <TableWrapper style={{ maxHeight: "50vh", overflowY: "auto" }}>
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
        </StepsList>
      </TableWrapper>
    )
  },
  {
    content: (
      <TableWrapper>
        <StepsList>
          <li>
            Al acceder al enlace aparecerá la siguiente imagen, en ella introducir vuestro username y password y pinchar en Retrieve Access Details
            <StepImage src="/DataTable/1.png" alt="weburl" />
          </li>
        </StepsList>
      </TableWrapper>
    )
  },
  {
    content: (
      <TableWrapper>
        <StepsList>
          <li>
            Os cargará una página en la que aparece un cuadro M3U playlist URL, debéis copiar todo el contenido de ese cuadro (cuadro rojo)
            <StepImage src="/DataTable/2.png" alt="urlusuario" />
          </li>
        </StepsList>
      </TableWrapper>
    )
  },
  {
    content: (
      <TableWrapper>
        <StepsList>
          <li>
            Os guardáis el enlace completo y este paso estaría listo. Yo suelo guardar las URL completas en las notas del móvil, así siempre tengo la última actualizada
          </li>
        </StepsList>
      </TableWrapper>
    )
  }
]