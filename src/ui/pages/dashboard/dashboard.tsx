import { Grid } from '@mui/material';
import { BoxCt } from 'ui/components/box-ct';
import { Layout } from 'ui/components/layout';
import { Register } from 'ui/components/register';
import { dayliFarm } from 'service/mock/dayliFarm';

export const Dashboard = () => {
  const {credits, crystals, omega, shipCredits, zeta} = dayliFarm;
  return (
    <Layout>
      <BoxCt title='Farm Diário'>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Register title='Créditos' value={credits} />
          </Grid>
          <Grid item xs={2}>
            <Register title='Cristais' value={crystals} />
          </Grid>
          <Grid item xs={3}>
            <Register title='Créditos de Naves' value={shipCredits} />
          </Grid>
          <Grid item xs={2}>
            <Register title='Omega' value={omega} />
          </Grid>
          <Grid item xs={2}>
            <Register title='Zeta' value={zeta} />
          </Grid>
        </Grid>
      </BoxCt>
    </Layout>
  );
}