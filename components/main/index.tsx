import { Box, Button, Grid, MenuItem, Select, Stack } from '@mui/material';
import DashboardCard from '../card';
import ManagementCardDetails from '../card/details/management';
import TimeOffCardDetails from '../card/details/time-off';
import ProfileCardDetails from '../card/details/profile';
import UpcomingEventCardDetails from '../card/details/upcoming-event';
import { ImageIcon } from '@/constants';
import RecentActivityCardDetails from '../card/details/recent-activity';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // specify the weights you need
});

const Main = () => {
  return (
    <Stack
      style={{
        padding: '30px',
      }}
      gap={3}
    >
      <div style={{ display: 'flex' }}>
        <Box
          sx={{
            flexGrow: 1,
            color: '#0A0D14',
            fontWeight: 700,
            fontSize: { xs: '20px', md: '24px' },
          }}
        >
          Dashboard
        </Box>
        <Stack
          sx={{ display: { xs: 'none', md: 'flex' } }}
          direction='row'
          gap={2}
        >
          <Button
            variant='outlined'
            // style={{
            //   color: '#0035C3',
            //   fontSize: '16px',
            //   fontWeight: 700,
            //   textTransform: 'none',
            // }}
            style={{
              textTransform: 'none',
              color: '#0035C3',
              borderColor: '#0035C3',
              fontWeight: 700,
            }}
            className={openSans.className}
          >
            View Paystub
          </Button>
          <Button
            variant='contained'
            // style={{
            //   color: '#0035C3',
            //   fontSize: '16px',
            //   fontWeight: 700,
            //   textTransform: 'none',
            // }}
            style={{
              textTransform: 'none',
              backgroundColor: '#0035C3',
              fontWeight: 700,
              boxShadow: 'none',
            }}
            className={openSans.className}
          >
            Performance Summary
          </Button>
        </Stack>
        <Box sx={{ display: { xs: 'initial', md: 'none' } }}>
          <Select
            defaultValue='Actions'
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#101928',
              height: '20px',
              padding: '16px 0px',
              borderRadius: '6px',
            }}
            disabled
          >
            <MenuItem
              value='Actions'
              style={{ fontSize: '14px', fontWeight: 600, color: '#101928' }}
            >
              Actions
            </MenuItem>
          </Select>
        </Box>
      </div>
      <Grid columnSpacing={4} rowSpacing={4} container>
        <Grid
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          xs={12}
          md={6}
          lg={3}
          item
        >
          <DashboardCard
            title='Time-Off'
            imageSrc={ImageIcon.clock.src}
            imageAlt={ImageIcon.clock.alt}
          >
            <TimeOffCardDetails />
          </DashboardCard>
        </Grid>
        <Grid xs={12} md={6} lg={3} item>
          <DashboardCard
            title='Profile'
            imageSrc={ImageIcon.profile.src}
            imageAlt={ImageIcon.profile.alt}
          >
            <ProfileCardDetails />
          </DashboardCard>
        </Grid>
        <Grid xs={12} md={12} lg={6} item>
          <DashboardCard
            title='Upcoming Events'
            imageSrc={ImageIcon.calendar.src}
            imageAlt={ImageIcon.calendar.alt}
          >
            <UpcomingEventCardDetails />
          </DashboardCard>
        </Grid>
      </Grid>
      <Grid columnSpacing={4} rowSpacing={4} container>
        {[
          {
            title: 'Device Management',
            imageSrc: ImageIcon.laptop.src,
            imageAlt: ImageIcon.laptop.alt,
            details: [
              { title: 'Device Type', body: 'Laptop' },
              { title: 'Device Name', body: 'Macbook 2021' },
              { title: 'Timeline', body: '21/Jun/2024 - 21/Dec/2024' },
              { title: 'Status', body: 'Assigned' },
              {
                title: 'Details',
                body: 'Device name HP Elitebook Processor......',
              },
            ],
          },
          {
            title: 'App Management',
            imageSrc: ImageIcon.cube.src,
            imageAlt: ImageIcon.cube.alt,
            details: [
              { title: 'App Name', body: 'Figma' },
              { title: 'App ID', body: '202201301610' },
              { title: 'Timeline', body: '21/Jun/2024' },
              { title: 'Status', body: 'Admin' },
              {
                title: 'Details',
                body: 'Figma Update for version 1.0 is disab......',
              },
            ],
          },
        ].map((item, index) => (
          <Grid key={index} xs={12} sm={12} md={6} lg={4} item>
            <DashboardCard {...item}>
              <ManagementCardDetails details={item.details} />
            </DashboardCard>
          </Grid>
        ))}
        <Grid xs={12} sm={12} md={12} lg={4} item>
          <DashboardCard
            title='Recent Activity'
            imageSrc={ImageIcon.lightning.src}
            imageAlt={ImageIcon.lightning.alt}
          >
            <RecentActivityCardDetails />
          </DashboardCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Main;
