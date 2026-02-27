import { useNavigate } from "react-router-dom"
import { Grid, Card, AppIcon, AppInfo, AppName, AppDescription } from "./AppsGalleryStyled"
import { apps } from "../../data/apps"

export function AppsGalleryComponent() {
  const navigate = useNavigate()

  return (
    <Grid>
      {apps.map(app => (
        <Card key={app.id} onClick={() => navigate(`/app/${app.id}`)}>
          <AppIcon src={app.logo} alt={app.name} />
          <AppInfo>
            <AppName>{app.name}</AppName>
            <AppDescription>{app.description}</AppDescription>
          </AppInfo>
        </Card>
      ))}
    </Grid>
  )
}