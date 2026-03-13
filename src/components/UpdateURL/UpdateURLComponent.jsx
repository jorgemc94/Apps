import React from "react";
import { TableWrapper, Table, TableHead, TableRow, TableHeader, TableBody, TableData, StepsList, StepVideo } from "./UpdateURLStyled";
import { urls } from "../../data/url";
import { Subtitle, Title } from "../../styles/Typography";

export function UpdateURL() {
  return (
    <div>
      <Title>Actualizar URL</Title>
      <Subtitle>Este es el primer paso que debéis hacer para actualizar vuestra URL, salvo en la aplicación XPRO, que lo hace automáticamente. A continuación van detallados los pasos con su respectivo video</Subtitle>
      <TableWrapper>
        <StepsList>
          <li>
            <StepVideo href="/DataTable/1.png" />
            Teniendo vuestro usuario, abrir el enlace dependiendo de cómo empiece vuestro usuario. 
            Los últimos empiezan todos por ff o 2ff:
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
      <TableWrapper>
        <StepsList>
          <li>
            <StepVideo href="/DataTable/1.png" />
            Al acceder al enlace aparecerá la siguiente imagen, en ella introducir vuestro usuario y contraseña y pinchar en Retrieve Access Details
          </li>
        </StepsList>
      </TableWrapper>
      <TableWrapper>
        <StepsList>
          <li>
            <StepVideo href="/DataTable/1.png" />
            Debéis copiar el contenido que aparece dentro de M3U playlist URL.
          </li>
        </StepsList>
      </TableWrapper>
      <TableWrapper>
        <StepsList>
          <li>
            <StepVideo href="/DataTable/1.png" />
            Os guardáis el enlace completo y este paso estaría listo. Yo suelo guardar las URL completas en las notas del móvil, así siempre tengo la última actualizada
          </li>
        </StepsList>
      </TableWrapper>
    </div>
  );
}