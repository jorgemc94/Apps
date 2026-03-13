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
            <StepVideo src="/UpdateURL/1.mp4" controls/>
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
            <StepVideo src="/UpdateURL/2.mp4" controls/>
            Al acceder al enlace aparecerá la siguiente imagen, en ella introducir vuestro usuario y contraseña y pinchar en Retrieve Access Details
          </li>
        </StepsList>
      </TableWrapper>
      <TableWrapper>
        <StepsList>
          <li>
            <StepVideo src="/UpdateURL/3.mp4" controls/>
            Debéis copiar el contenido que aparece dentro de M3U playlist URL. Una vez copiado guardarlo en las notas del móvil, con los demás datos.
          </li>
        </StepsList>
      </TableWrapper>
    </div>
  );
}