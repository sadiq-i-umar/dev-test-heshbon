import { Status } from '@/types';
import TimeOffRequest from './request';
import { Stack } from '@mui/material';
import './progress-style.css';

const TimeOffCardDetails = () => {
  return (
    <Stack gap={5}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='progress'>
          <div className='barOverflow'>
            <div className='bar'></div>
          </div>
          <div style={{ position: 'absolute', top: 35, left: 63 }}>
            <div
              style={{ fontWeight: 700, fontSize: '24px', color: '#0A0D14' }}
            >
              60
            </div>
            <div
              style={{ fontWeight: 700, fontSize: '10px', color: '#98A2B3' }}
            >
              OUT OF 60
            </div>
          </div>
        </div>
      </div>
      <Stack gap={2}>
        {[
          {
            dotColor: 'blue',
            date: 'Jul 30, 2024',
            requestType: 'Sick',
            status: Status.approved,
          },
          {
            dotColor: 'green',
            date: 'Aug 1, 2024',
            requestType: 'Annual',
            status: Status.rejected,
          },
          {
            dotColor: 'red',
            date: 'Aug 12, 2024',
            requestType: 'Exam',
            status: Status.pending,
          },
        ].map((item, index) => (
          <TimeOffRequest key={index} {...item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default TimeOffCardDetails;
