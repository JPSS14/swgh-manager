import { Grid } from '@mui/material';
import { BoxCt } from 'ui/components/box-ct';
import { Layout } from 'ui/components/layout';
import { Register } from 'ui/components/register';

export const Dashboard = () => {
  return (
    <Layout>
      <BoxCt title='Farm Diário'>
        <Grid container rowSpacing={0}>
          <Grid item xs={2}>
            <Register title='Créditos' value={40} />
          </Grid>
          <Grid item xs={2}>
            <Register title='Cristais' value={40} />
          </Grid>
          <Grid item xs={2}>
            <Register title='Créditos de Naves' value={40} />
          </Grid>
          <Grid item xs={2}>
            <Register title='Omega' value={40} />
          </Grid>
          <Grid item xs={2}>
            <Register title='Zeta' value={40} />
          </Grid>
        </Grid>
      </BoxCt>
    </Layout>
  );
}